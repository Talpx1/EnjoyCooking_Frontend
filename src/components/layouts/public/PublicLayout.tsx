import { Outlet } from 'react-router-dom';
export default function PublicLayout() {
    return(
        <>
            <h1>PUBLIC</h1>
            <Outlet />
        </>
    )
};
