import React from 'react';
import { Signup as SignupComponent } from '../components';

function Signup() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200'>
        <div className='w-full max-w-lg p-8 bg-white rounded-lg shadow-lg'>
            <h1 className='text-3xl font-bold text-center mb-4 text-blue-600'>Create Your Account</h1>
            <p className='text-center text-gray-600 mb-6'>
                Join our community and stay updated with the latest content. Enjoy exclusive access to features and personalized experiences tailored just for you.
            </p>
            <SignupComponent />
            <div className='mt-4 text-center'>
                <p className='text-gray-600'>
                    Already have an account? 
                    <a href='/login' className='text-blue-500 hover:text-blue-600 hover:underline ml-2'>
                        Sign In
                    </a>
                </p>
            </div>
        </div>
    </div>
  );
}

export default Signup;
