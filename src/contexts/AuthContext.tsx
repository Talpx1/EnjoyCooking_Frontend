import React, { createContext, useState } from "react";
import { cleanUserLogin, userLogin } from '../services/auth/auth';

export const AuthContext = createContext(null);

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);

    function userLogout() {
        setUser(null);
        cleanUserLogin();
    }

    return(
        <AuthContext.Provider value={[userLogin, userLogout]}>
            {children}
        </AuthContext.Provider>
    );
};