import React from 'react';
import AuthProvider from './contexts/AuthContext';
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { routes } from './routes';

const router = createBrowserRouter(createRoutesFromElements(routes));

export default function App() {
    return (
        <React.StrictMode>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </React.StrictMode>
    );

};