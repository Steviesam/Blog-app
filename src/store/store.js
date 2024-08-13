import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';

// Configure and create the Redux store
const store = configureStore({
    reducer: {
        auth: authSlice, // Auth slice to manage authentication state
        // TODO: Add more slices here for posts, users, etc.
        // Example:
        // posts: postsSlice,
        // users: usersSlice,
    },
    // Middleware: You can customize middleware here, such as adding middleware for logging or handling side effects
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Disable serializable check for non-serializable data
        }),
    // DevTools: Enable Redux DevTools only in development mode for better debugging
    devTools: process.env.NODE_ENV !== 'production',
});

// TODO: Add additional store configurations, such as persisting the state or enhancing performance

export default store;
