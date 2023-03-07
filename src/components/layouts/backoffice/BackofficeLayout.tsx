import Header from "./components/Header";
import SideMenu from './components/SideMenu';
import { Outlet } from 'react-router-dom';

export default function BackofficeLayout() {
    return (
        <div className="flex flex-col min-h-screen max-h-screen overflow-y-hidden bg-ec-base-light text-ec-gray-dark">
            <Header />
            <div className="flex flex-1 min-h-0">
                <SideMenu />
                <main className="px-5 py-3 flex-auto overflow-y-scroll">
                    <Outlet />
                </main>
            </div>
        </div>
    )
};
