import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function SideMenu() {

    const { t } = useTranslation();

    return (
        <aside className="py-3 px-5 bg-ec-base-medium max-h-full overflow-y-scroll">
            <nav>
                <ul className="flex flex-col gap-3">
                    <li><NavLink to="/backoffice">{t('dashboard')}</NavLink></li>
                    <li><NavLink to="award">{t('awards')}</NavLink></li>
                </ul>
            </nav>
        </aside>
    )
};
