"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Link from 'next/link';
import NavLogoBar from '../components/NavLogoBar';
import { FacebookLogin, GoogleLogin } from '../components/SocialLogin';
import InputField from '../components/Input'

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
  const router =  useRouter()

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async(data: FormData) => {
    try {
      const response = await axios.post('/api/login', data);
      console.log(response.data); 
      router.push('/'); 
    } catch (error) {
      console.error('Login error:', error);
    }
  };



  return (
    <div>
      <NavLogoBar />
      <div className="flex justify-center items-center">
        <div className="max-w-md w-full bg-white p-8 rounded-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">Sign In</h1>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
