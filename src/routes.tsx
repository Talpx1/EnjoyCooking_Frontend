import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';
import Awards from './pages/Awards';
import { awardsLoader } from './core/loaders/award';
import BackofficeLayout from './components/layouts/backoffice/BackofficeLayout';
import PublicLayout from './components/layouts/public/PublicLayout';

export const routes = [
    //backoffice
    {
        path: "/backoffice",
        element: <BackofficeLayout />,
        errorElement: <ErrorPage />,
        children:[
            {
                path: "awards",
                element: <Awards />,
                loader: awardsLoader
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
        ]
    },
    //public
    {
        path: "/",
        element: <PublicLayout />,
        errorElement: <ErrorPage />,
        children:[]
    },
]