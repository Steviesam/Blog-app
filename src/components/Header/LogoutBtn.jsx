import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      await authService.logout();
      dispatch(logout());
    } catch (error) {
      console.error('Logout failed:', error);
      // Optionally, you can display an error message to the user
    }
  };

  return (
    <button
      className='inline-block px-6 py-2 text-white bg-red-500 hover:bg-red-600 rounded-full duration-200 focus:outline-none focus:ring-2 focus:ring-red-300'
      onClick={logoutHandler}
      aria-label="Logout"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
