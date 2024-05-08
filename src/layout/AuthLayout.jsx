import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
const AuthLayout = () => {
    let authenticated = true; // FIXME: Replace with actual authentication check
    if (authenticated) {
        return (
            <Outlet />
        )
    }
    
    return <Navigate to="/login" />;

    
};

export default AuthLayout;
