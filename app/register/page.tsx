"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import NavLogoBar from '../components/NavLogoBar';
import InputField from '../components/Input';
import axios from 'axios';
import { AppContext} from '../context/index'
import { FacebookLogin , GoogleLogin } from '../components/SocialLogin';

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const emailSchema = z.object({
  email: z.string().email(),
});
const passwordSchema = z.object({
  password: z.string().min(6),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});
const RegisterPage = () => {
  const {setIsLoggedIn} = React.useContext(AppContext)
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } ,setError  } = useForm<FormData>();
  const [step, setStep] = useState(1);
  const [formErrors, setFormErrors] = useState(false);

  const onSubmitEmail = async (data :any ) => {
    try {
      await emailSchema.parseAsync(data);
      setStep(2);
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach(err => {
          if (err.path) {
            setError(err.path[0] as keyof FormData, {
              type: "manual",
              message: err.message
            });
          }
        });
      }
    }
  };

  const onSubmitPassword = async (data :any ) => {
    console.log(data);
    try {
      await passwordSchema.parseAsync(data);
      if (data.password !== data.confirmPassword) {
        setFormErrors(true);
        return;
      }
    
      const newData = {
        email: data.email,
        password: data.password
      }
      // const response = await axios.post('/api/login',{
      //   data: newData, 
      //   headers : {
      //     'Content-Type' : 'application/json'
      //   }
      // });
      // console.log(response.data);
      // console.log('Account created!' , data);

      // router.push('/login');
      const response = await axios.post('/api/login',{
        method : 'POST',
        body :data,
        headers : {
          'Content-Type' : 'application/json'
        }
      });
      console.log(response.data);
      setIsLoggedIn(true);
      router.push('/');
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach(err => {
          if (err.path) {
            setError(err.path[0] as keyof FormData, { // corrected error path
              type: "manual",
              message: err.message
            });
          }
        });
      } else {
        console.error('Register error:', error);
      }
    }
  };

  return (
    <div>
      <NavLogoBar />
      <div className="m-8 flex justify-center items-center">
        <div className="max-w-md w-full bg-white p-8 rounded-lg">
          {step === 1 ? (
            <>
              <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
              <form onSubmit={handleSubmit(onSubmitEmail)} className="space-y-4">
                <InputField
                  label="Email address"
                  name="email"
                  type="email"
                  register={register}
                  error={errors.email}
                />
                <button
                  type="submit"
                  className="bg-[#2F80ED] text-white w-full py-3 rounded mb-4"
                >
                  Continue with Email
                </button>
              </form>
              <div className="mt-8 flex inline-block">
            <hr className="mt-3 flex-grow border-gray-300" />
            <span className="mx-2">or use one of these options</span>
            <hr className=" mt-3 flex-grow border-gray-300" />
          </div>
          <FacebookLogin />
          <GoogleLogin />
          <p className=" mt-8 text-center text-gray-600">
            Already have an account? <a href="/login" className="text-blue-500">Sign in</a>
          </p>
        
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold mb-4 text-center">Create password</h1>
              <p className='text-sm mb text-center'>
                Use a minimum of 10 characters, including letters, lowercase letters, and numbers.
              </p>
              <form onSubmit={handleSubmit(onSubmitPassword)} className="space-y-4">
                <InputField
                  label="Password"
                  name="password"
                  type="password"
                  register={register}
                  error={errors.password}
                />
                <InputField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  register={register}
                  error={errors.confirmPassword}
                />
                {formErrors && ( 
                  <p className="text-red-500">Passwords don&apos;t match</p>
                )}
                <button
                  type="submit"
                  className="bg-[#2F80ED] text-white w-full py-3 rounded mb-4"
                >
                  Create account
                </button>
              </form>
              <p className=" mt-8 text-start text-gray-600">
            By creating an account, you agree with our <a href="/login" className="text-blue-500">Terms and Conditions</a> and <a href="/login" className="text-blue-500">Privacy Statement.</a>
          </p>
            </>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
