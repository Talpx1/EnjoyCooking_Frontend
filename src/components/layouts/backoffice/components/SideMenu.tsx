import { useTranslation } from "react-i18next";
import Can from "../../../conditionals/Can";
import NavLink from "../../../ui/backoffice/NavLink";

export default function SideMenu() {

    const { t } = useTranslation();

    return (
        <aside className="py-3 px-5 bg-ec-base-medium min-w-fit overflow-y-scroll">
            <nav>
                <ul className="flex flex-col gap-y-8">
                    {/* dashboard */}
                    <li><NavLink to="/backoffice" end>{t('dashboard')}</NavLink></li>
                    
                    {/* awards */}
                    <Can permission="edit_award">
                        <li><NavLink to="award">{t('awards')}</NavLink></li>
                    </Can>

                    {/* awards */}
                    <Can permission="edit_badge">
                        <li><NavLink to="badge">{t('badges')}</NavLink></li>
                    </Can>

                    {/* awards */}
                    <Can permission="edit_category">
                        <li><NavLink to="category">{t('categories')}</NavLink></li>
                    </Can>                    
                </ul>
            </nav>
        </aside>
    )
};
