import { createSlice } from "@reduxjs/toolkit";

// Initial state of the authentication slice
const initialState = {
    status: false, // Indicates whether the user is authenticated
    userData: null // Stores the user's data when authenticated
};

// Authentication slice with actions and reducers
const authSlice = createSlice({
    name: "auth", // Name of the slice
    initialState,
    reducers: {
        // Action to log in the user
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        // Action to log out the user
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
});

// Export the action creators for use in components
export const { login, logout } = authSlice.actions;

// Export the reducer to be included in the store
export default authSlice.reducer;
