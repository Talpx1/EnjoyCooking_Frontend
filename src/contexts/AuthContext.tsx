import React, { createContext, useState, useContext } from "react";
import { cleanUserLogin, userLogin } from '../services/auth';

const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
};

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);

    function userLogout() {
        setUser(null);
        cleanUserLogin();
    }

    return(
        <AuthContext.Provider value={[user, userLogin, userLogout]}>
            {children}
        </AuthContext.Provider>
    );
};