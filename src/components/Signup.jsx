import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { Button, Input, Logo } from './index.js';
import { useForm } from 'react-hook-form';

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");

    const createAccount = async (data) => {
        setError("");
        try {
            const userData = await authService.createAccount(data);
            if (userData) {
                dispatch(login(userData));
                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-gray-200 shadow-lg">
                <div className="mb-4 flex justify-center">
                    <Logo />
                </div>
                <h2 className="text-center text-2xl font-bold">Sign up to create account</h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Sign In</Link>
                </p>
                {error && <p className="text-red-600 text-center mt-4">{error}</p>}
                <form onSubmit={handleSubmit(createAccount)} className="mt-6">
                    <div className="space-y-6">
                        <Input
                            label="Full Name"
                            placeholder="Enter your full name"
                            {...register("name", { required: "Full name is required" })}
                            error={errors.name?.message}
                        />
                        <Input
                            label="Email"
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                    message: "Email address must be valid"
                                }
                            })}
                            error={errors.email?.message}
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters"
                                }
                            })}
                            error={errors.password?.message}
                        />
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
