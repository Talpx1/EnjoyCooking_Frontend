import React, { createContext, useState } from "react";
import { userLoginCleanup, userLogin } from '../services/auth/auth';
import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext(null);
export const UserContext = createContext(null);

export default function AuthProvider({children}) {
    const [user, setUser, clearUser] = useLocalStorage('user', null);

    async function userLogout() {
        await userLoginCleanup();
        clearUser();

        window.location.href = '/';
    }

    function isLoggedIn() {
        return user !== null && user !== undefined;
    }

    return(
        <AuthContext.Provider value={[userLogin, userLogout, isLoggedIn]}>
            <UserContext.Provider value={[user, setUser]}>
                {children}
            </UserContext.Provider>
        </AuthContext.Provider>
    );
};