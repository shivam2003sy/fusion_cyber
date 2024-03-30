"use client"
import React from 'react';
import { useRouter } from 'next/navigation'; // Corrected import statement
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import NavLogoBar from '../components/NavLogoBar';
import InputField from '../components/Input';

const schema = z.object({
  email: z.string().email(),
});

const RegisterPage1 = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    router.push('/');
  };

  return (
    <div>
      <NavLogoBar />
      <div className="m-8 flex justify-center items-center">
        <div className="max-w-md w-full bg-white p-8 rounded-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">Create password</h1>
          <p className='text-sm mb text-center'>
          Use a minimum of 10 characters, including letters, lowercase letters, and numbers.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Replace the input element with the InputField component */}
            <InputField
              label="Password"
              name="password"
              type="password"
              register={register}
            />
            <InputField
              label="Confirm Password" // Corrected label
              name="confirmPassword" // Corrected name
              type="password" // Corrected type
              register={register}
            />
            <button
              type="submit"
              className="bg-[#2F80ED] text-white w-full py-3 rounded mb-4"
            >
              Create account
            </button>
          </form>
          
          <p className=" mt-8 text-start text-gray-600">
          By creating an account, you agree with our <a href="/login" className="text-blue-500">Terms and Conditions</a> and<a href="/login" className="text-blue-500">Privacy Statement.</a> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage1;
