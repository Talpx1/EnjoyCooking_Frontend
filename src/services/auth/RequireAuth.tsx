import { Navigate } from 'react-router-dom';
import useUser from "../../hooks/useUser";
import useAuth from '../../hooks/useAuth';
import { userLogin } from './auth';

export default function RequireAuth({children}) {
    const [userLogin, userLogout, isLoggedIn] = useAuth();

    return (isLoggedIn() ? <>{children}</> : <Navigate to='/login' replace={true} />);
};