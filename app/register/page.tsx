"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import NavLogoBar from '../components/NavLogoBar';
import { FacebookLogin, GoogleLogin } from '../components/SocialLogin';
import InputField from '../components/Input'

const schema = z.object({
  email: z.string().email(),
});

const RegisterPage = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    router.push('/register1');
  };

  return (
    <div>
      <NavLogoBar />
      <div className="flex justify-center items-center">
        <div className="max-w-md w-full bg-white p-8 rounded-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Replace the input element with the InputField component */}
            <InputField
              label="Email address"
              name="email"
              type="email"
              register={register}
             
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
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
