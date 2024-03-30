"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import NavLogoBar from '../components/NavLogoBar';
import InputField from '../components/Input';
import axios from 'axios';
const emailSchema = z.object({
  email: z.string().email().min(1),
});
const passwordSchema = z.object({
  password: z.string().min(6),
  confirmPassword: z.string(),
});
const RegisterPage = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [step, setStep] = useState(1);
  const [formErrors, setFormErrors] = useState({});
  const onSubmitEmail = async (data) => {
    try {
      await emailSchema.parseAsync(data);
      setStep(2);
    } catch (error) {
      setFormErrors(error.formErrors);
    }
  };
  const onSubmitPassword = async (data) => {
    try {
      await passwordSchema.parseAsync(data);
      if (data.password !== data.confirmPassword) {
        throw new Error("Passwords don't match");
      }
      console.log('Account created!' , data);

      const newData = {
        email: data.email,
        password: data.password
      }
      const response = await axios.post('/api/login',{
        method : 'POST',
        body :newData,
        headers : {
          'Content-Type' : 'application/json'
        }
      });
      console.log(response.data);

      router.push('/login');
    } catch (error) {
      setFormErrors({...error.formErrors, password: true}); 
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
                  error={formErrors.email || errors.email}
                />
                <button
                  type="submit"
                  className="bg-[#2F80ED] text-white w-full py-3 rounded mb-4"
                >
                  Continue with Email
                </button>
              </form>
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
                  error={formErrors.password || errors.password} // Display password length error
                />
                <InputField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  register={register}
                  error={formErrors.confirmPassword || errors.confirmPassword}
                />
                {formErrors.password && ( // Display password mismatch error
                  <p className="text-red-500">Passwords don&apos;t match</p>
                )}
                <button
                  type="submit"
                  className="bg-[#2F80ED] text-white w-full py-3 rounded mb-4"
                >
                  Create account
                </button>
              </form>
            </>
          )}
          <p className=" mt-8 text-start text-gray-600">
            By creating an account, you agree with our <a href="/login" className="text-blue-500">Terms and Conditions</a> and <a href="/login" className="text-blue-500">Privacy Statement.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
