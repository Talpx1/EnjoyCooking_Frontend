import { useTranslation } from "react-i18next";
import Can from "../../../conditionals/Can";
import NavLink from "../../../ui/backoffice/NavLink";
import { MdDashboard, MdCategory } from 'react-icons/md';
import { BsFillAwardFill, BsGenderAmbiguous } from 'react-icons/bs';
import { GiHotMeal } from 'react-icons/gi';
import { HiIdentification } from 'react-icons/hi';
import { AiFillDashboard } from 'react-icons/ai';

export default function SideMenu() {

    const { t } = useTranslation();

    return (
        <aside className="py-3 px-5 bg-ec-base-medium min-w-fit overflow-y-scroll">
            <nav>
                <ul className="flex flex-col gap-y-4">
                    {/* dashboard */}
                    <li><NavLink to="/backoffice" icon={<MdDashboard />} end>{t('dashboard')}</NavLink></li>
                    
                    {/* awards */}
                    <Can permission="edit_award">
                        <li><NavLink to="award" icon={<BsFillAwardFill />}>{t('awards')}</NavLink></li>
                    </Can>

                    {/* badges */}
                    <Can permission="edit_badge">
                        <li><NavLink to="badge" icon={<HiIdentification />}>{t('badges')}</NavLink></li>
                    </Can>

                    {/* categories */}
                    <Can permission="edit_category">
                        <li><NavLink to="category" icon={<MdCategory />}>{t('categories')}</NavLink></li>
                    </Can>      

                    {/* categories */}
                    <Can permission="edit_course">
                        <li><NavLink to="course" icon={<GiHotMeal />}>{t('courses')}</NavLink></li>
                    </Can>

                    {/* categories */}
                    <Can permission="edit_difficulty_level">
                        <li><NavLink to="difficulty_level" icon={<AiFillDashboard />}>{t('difficulty_levels')}</NavLink></li>
                    </Can>

                    {/* categories */}
                    <Can permission="edit_gender">
                        <li><NavLink to="gender" icon={<BsGenderAmbiguous />}>{t('genders')}</NavLink></li>
                    </Can>                    
                </ul>
            </nav>
        </aside>
    )
};
