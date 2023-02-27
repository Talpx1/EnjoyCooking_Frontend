import useAuth from "../../../../hooks/useAuth"
import Button from "../../../ui/Button";

export default function Header() {

    const [userLogin, userLogout, isLoggedIn] = useAuth();

    return (
        <header className="bg-ec-brick py-3 px-5 flex justify-between">
            <div>HEADER</div>
            <Button type='button' onClick={async () => await userLogout()}>LogOut</Button>
        </header>
    )
};
