import { useTranslation } from "react-i18next";
import { useChangeTitle } from "../../hooks/useChangeTitle";

export default function Dashboard() {

    const {t} = useTranslation();
    
    useChangeTitle(t('dashboard'));

    return (
        <>
            <h1>Dashboard</h1>
        </>
    )
};
