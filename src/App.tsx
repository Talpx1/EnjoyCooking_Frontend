import React, { Suspense } from 'react';
import AuthProvider from './contexts/AuthContext';
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { routes } from './routes';
import './services/i18n'

const router = createBrowserRouter(createRoutesFromElements(routes));

export default function App() {
    return (
        <React.StrictMode>
            <Suspense fallback="loading...">
                <AuthProvider>
                    <RouterProvider router={router} />
                </AuthProvider>
            </Suspense>
        </React.StrictMode>
    );

};