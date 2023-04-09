import { useTranslation } from "react-i18next";
import { useRouteError } from "react-router-dom";
import { useChangeTitle } from "../../../hooks/useChangeTitle";
import PageTitle from "../../../components/ui/backoffice/PageTitle";

export default function ErrorPage() {
    const error = useRouteError();
    const {t} = useTranslation();

    console.error(error);

    useChangeTitle(`Oops!${error.statusText ? ` - ${error.statusText}` : ''}`);

    return (
        <div id="error-page" className="text-center grid place-content-center bg-ec-base-light h-full">
            <PageTitle>Oops!</PageTitle>
            <p>{error.statusText || error.message || t('unexpected_error')}</p>
        </div>
    );
}