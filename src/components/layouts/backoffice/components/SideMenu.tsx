import { Link } from "react-router-dom";

export default function SideMenu() {
    return (
        <aside className="py-3 px-5 bg-ec-brick max-h-full overflow-y-scroll">
            <nav>
                <ul className="flex flex-col gap-3">
                    <li><Link to={`dashboard`}>Dashboard</Link></li>
                    <li><Link to={`awards`}>Awards</Link></li>
                </ul>
            </nav>
        </aside>
    )
};
