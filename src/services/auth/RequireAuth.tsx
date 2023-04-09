import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function RequireAuth({children}) {
    const [userLogin, userLogout, isLoggedIn] = useAuth();

    return (isLoggedIn() ? <>{children}</> : <Navigate to='/login' replace={true} />);
};