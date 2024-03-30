import Image from 'next/image';
import React, { useState } from 'react';
import { FieldError } from 'react-hook-form';

type InputFieldProps = {
  label: string;
  name: string;
  type: string;
  register: any; // You can improve typing here if needed
  error?: FieldError | undefined;
};

const InputField: React.FC<InputFieldProps> = ({ label, name, type, register, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <label className="block">
      <span>{label}</span>
      <div className="relative">
        <input
          type={showPassword ? 'text' : type}
          formNoValidate={false}
          {...register(name, { required: `${label} is required` })}
          className={`border rounded p-2 mt-1 w-full bg-[#F2F2F2] border-none ${
            error ? 'border-red-500' : ''
          }`} 
        />
        {type === 'password' && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 px-3 py-1"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <Image src='/closed_eye.svg' alt='closed' width={20} height={20} />
            ) : (
            <Image src='/eye.svg' alt='open' width={20} height={20} />)
}
          
          </button>
        )}
      </div>
      {error && <span className="text-red-500">{error.message}</span>}
    </label>
  );
};

export default InputField;
