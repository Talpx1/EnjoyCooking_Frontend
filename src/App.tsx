import { Outlet } from "react-router-dom";
import Header from "./components/layouts/backoffice/components/Header";
import BackofficeLayout from "./components/layouts/backoffice/BackofficeLayout";
import SideMenu from './components/layouts/backoffice/components/SideMenu';

export default function App() {

  return (
    <BackofficeLayout>
      <Header/>
      <div className="flex flex-auto overflow-y-hidden">
        <SideMenu/>
        <main className="px-5 py-3 flex-auto max-h-full overflow-y-scroll">
          <Outlet />
        </main>
      </div>
    </BackofficeLayout>
  )

}
