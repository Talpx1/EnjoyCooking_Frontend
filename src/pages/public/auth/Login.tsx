import { Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Button from '../../../components/ui/Button';
export default function Login() {
    const [userLogin, userLogout, isLoggedIn] = useAuth()

    if(isLoggedIn()) return <Navigate to='/backoffice' replace={true} />

    return(
        <>
            TEST PAGE
            <Button type='button' onClick={userLogin}>Login</Button>
        </>
    )
};
