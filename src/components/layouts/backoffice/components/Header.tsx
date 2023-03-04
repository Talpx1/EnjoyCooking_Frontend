import useAuth from "../../../../hooks/useAuth"
import Button from "../../../ui/Button";
import logo from '../../../../assets/images/logo/logo.png'

export default function Header() {

    const [userLogin, userLogout, isLoggedIn] = useAuth();

    return (
        <header className="bg-ec-base-medium py-3 px-5 flex justify-between">
            <div>
                <img src={logo} className="max-h-14" />
            </div>
            <Button type='button' onClick={async () => await userLogout()}>LogOut</Button>
        </header>
    )
};
