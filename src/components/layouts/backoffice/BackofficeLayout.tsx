import Header from "./components/Header";
import SideMenu from './components/SideMenu';
import { Outlet } from 'react-router-dom';

export default function BackofficeLayout() {
    return (
        <div className="flex flex-col min-h-screen max-h-screen overflow-y-hidden bg-ec-light text-ec-dark">
            <Header/>
            <div className="flex flex-auto overflow-y-hidden">
                <SideMenu/>
                <main className="px-5 py-3 flex-auto max-h-full overflow-y-scroll">
                <Outlet />
                </main>
            </div>
        </div>
    )
};
