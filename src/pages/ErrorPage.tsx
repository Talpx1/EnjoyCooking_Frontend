import { useTranslation } from "react-i18next";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    const {t} = useTranslation();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>{t('unexpected_error')}</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}