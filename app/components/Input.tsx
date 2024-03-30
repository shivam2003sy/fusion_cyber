// InputField.tsx

import React from 'react';
import { FieldError } from 'react-hook-form';

type InputFieldProps = {
  label: string;
  name: string;
  type: string;
  register: any; // You can improve typing here if needed
  error?: FieldError | undefined;
};

const InputField: React.FC<InputFieldProps> = ({ label, name, type, register, error }) => {
  return (
    <label className="block">
      <span>{label}</span>
      <input
        type={type}
        // placeholder={label}
        {...register(name, { required: true })}
        className="border rounded p-2 mt-1 w-full  *:
        bg-[#F2F2F2]
        border-none]
        "
      />
      {error && <span className="text-red-500">{error.message}</span>}
    </label>
  );
};

export default InputField;
