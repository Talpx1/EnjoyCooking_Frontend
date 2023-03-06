import useAuth from "../../../../hooks/useAuth"
import Button from "../../../ui/buttons/Button";
import logo from '../../../../assets/images/logo/logo.png'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

export default function Header() {

    const [userLogin, userLogout, isLoggedIn] = useAuth();
    const { t } = useTranslation();

    return (
        <header className="bg-ec-base-medium py-3 px-5 flex justify-between">
            <div>
                <Link to='/'><img src={logo} className="max-h-14" /></Link>
            </div>
            <Button type='button' onClick={async () => await userLogout()}>{t('logout')}</Button>
        </header>
    )
};
