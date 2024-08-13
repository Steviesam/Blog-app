import React from 'react';
import { Login as LoginComponent } from '../components';

function Login() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-100 to-blue-100'>
        <div className='w-full max-w-md p-8 rounded-lg shadow-xl'
            style={{ backgroundColor: '#ffffff', backgroundOpacity: '0.95' }}> {/* Slightly more opaque white background */}
            <h1 className='text-4xl text-center font-bold mb-6' style={{ color: '#3b82f6' }}>Welcome Back!</h1> {/* Light blue for heading */}
            <p className='text-center text-sm mb-4' style={{ color: '#4b5563' }}>Please sign in to continue</p> {/* Medium gray for subtext */}
            <LoginComponent />
            <div className='mt-4 text-center'>
                <p style={{ color: '#4b5563' }}>New here? 
                    <a href='/signup' className='text-blue-400 hover:text-blue-500 hover:underline' style={{ textDecoration: 'none' }}>Create an account</a> {/* Light blue for link */}
                </p>
            </div>
        </div>
    </div>
  );
}

export default Login;
