
// Import React and required libraries
import React, { useState } from 'react';
import './App.css'; // Ensure you create this CSS file to include custom animations

// LoginPage Component
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Add authentication logic here
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <div className="relative flex justify-center items-center h-screen bg-gradient-to-br from-black to-gray-800">
            {/* Blurry background effect */}
            <div className="absolute inset-0 bg-teal-500 opacity-30 blur-3xl"></div>
            <form
                onSubmit={handleLogin}
                className="relative z-10 bg-black/70 backdrop-blur-lg border-2 border-gray-500 rounded-xl p-8 shadow-2xl transform scale-105 hover:scale-110 transition duration-500 ease-in-out w-full max-w-md"
            >
                <h1 className="text-center text-3xl font-bold text-teal-300 mb-6 animate-pulse">
                    Login / Register
                </h1>

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm text-teal-400 font-bold mb-2"
                    >
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border-2 rounded-lg bg-black text-teal-400 border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300"
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-sm font-bold text-teal-400 mb-2"
                    >
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 border-2 rounded-lg bg-black text-teal-400 border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 via-teal-500 to-green-400 py-2 px-4 rounded-lg hover:shadow-teal-500/50 text-black font-bold transition duration-300"
                >
                    Login
                </button>

                <p className="text-center text-sm text-teal-400 mt-4">
                    Don’t have an account?{' '}
                    <a href="#" className="text-blue-300 font-bold hover:underline">
                        Sign Up
                    </a>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
