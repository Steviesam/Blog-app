import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login as authLogin } from '../store/authSlice';
import authService from "../appwrite/auth";
import { Button, Input, Logo } from "./index";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");

    const login = async (data) => {
        setError("");
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    dispatch(authLogin(userData));
                    navigate("/");
                }
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='flex items-center justify-center w-full'>
            <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
                <div className="mb-2 flex justify-center">
                    <Logo />
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don't have an account? <Link to="/signup" className="font-medium text-primary transition-all duration-200 hover:underline">Sign Up</Link>
                </p>
                {error && <p className="text-red-600 mt-2 text-center">{error}</p>}
                <form onSubmit={handleSubmit(login)} className='mt-4 space-y-6'>
                    <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                message: "Invalid email address"
                            }
                        })}
                        error={errors.email && errors.email.message}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", { required: "Password is required" })}
                        error={errors.password && errors.password.message}
                    />
                    <Button type="submit" className="w-full">Sign in</Button>
                </form>
            </div>
        </div>
    );
}

export default Login;
