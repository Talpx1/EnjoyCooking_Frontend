import { NavLink } from "react-router-dom";

export default function SideMenu() {
    return (
        <aside className="py-3 px-5 bg-ec-brick max-h-full overflow-y-scroll">
            <nav>
                <ul className="flex flex-col gap-3">
                    <li><NavLink to="/backoffice">Dashboard</NavLink></li>
                    <li><NavLink to="award">Awards</NavLink></li>
                </ul>
            </nav>
        </aside>
    )
};
