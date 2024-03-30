"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Link from 'next/link';
import NavLogoBar from '../components/NavLogoBar';
import { FacebookLogin, GoogleLogin } from '../components/SocialLogin';
import InputField from '../components/Input'
import { AppContext} from '../context/index'

import { useRouter } from 'next/navigation';

import axios from 'axios'

type FormData = {
  email: string;
  password: string;
};

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function LoginForm() {
  const router = useRouter()
  const {isloggedIn , setIsLoggedIn} = React.useContext(AppContext)

  const { register, handleSubmit, formState: { errors }, setError } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    try {
      // Validate data against schema
      schema.parse(data);
      console.log(data);
      // If data is valid, proceed with form submission
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
            setError(err.path.join('.'), {
              type: "manual",
              message: err.message
            });
          }
        });
      } else {
        console.error('Login error:', error);
        setError("email", {
          type: "server",
          message: "Invalid email or password" 
        });
        setError("password", {
          type: "server",
          message: "Invalid email or password" 
        });
      }
    }
  };

  return (
    <div>
      <NavLogoBar />
      <div className="flex justify-center items-center">
        <div className="max-w-md w-full bg-white p-8 rounded-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">Sign In</h1>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit) }>
            <InputField label="Email Address" name="email" type="email" register={register} error={errors.email} />
            <InputField label="Password" name="password" type="password" register={register} error={errors.password} />
            <div className="text-right">
              <Link href="#"className="text-blue-500" >Forgot password ?</Link>
            </div>
           
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full">Continue with Email</button>
          </form>
          <div className="mt-8 flex inline-block">
            <hr className="mt-3 flex-grow border-gray-300" />
            <span className="mx-2">or use one of these options</span>
            <hr className=" mt-3 flex-grow border-gray-300" />
          </div>
          <div className=" text-center">
            <GoogleLogin />
            <FacebookLogin />
            <p className="mt-4">Don't have an account? <Link href="/register" className="text-blue-500">Register</Link></p>
          </div>
        </div>
      </div>  
    </div>
  );
}
