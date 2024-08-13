import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';
import Spinner from './components/Spinner'; // Assuming you have a Spinner component for loading

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
        dispatch(logout());
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, [dispatch]);

  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <Spinner /> {/* Display a spinner or loading indicator */}
      </div>
    );
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow'>
        <Outlet /> {/* Placeholder for nested routes */}
      </main>
      <Footer />
    </div>
  );
}

export default App;

