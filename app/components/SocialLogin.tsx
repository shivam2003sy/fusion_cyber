import Image from 'next/image';

export const FacebookLogin = () => {
    return (
        <button
            className="flex items-center justify-center bg-[#475993] text-white p-4 rounded-md cursor-pointer
            px-4 py-2 rounded mt-4 w-full
            "
         
            aria-label="Log in with Facebook"
        >
            <Image src="/facebook.svg" alt="Facebook Logo" width={20} height={20} />
            <span className="ml-2">Facebook Login</span>
        </button>
    );
}

export const GoogleLogin = () => {
    return (
        <button
            className="flex items-center justify-center bg-white text-black p-4 rounded-md border border-gray-300 cursor-pointer px-4 py-2 rounded mt-4 w-full"
            
            aria-label="Log in with Google"
        >
            <Image src="/google.svg" alt="Google Logo" width={20} height={20} />
            <span className="ml-2">Google Login</span>
        </button>
    );
}
