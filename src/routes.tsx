import Dashboard from './pages/Dashboard';
import ErrorPage from './error-page';
import Awards from './pages/Awards';
import App from './App';
import { awardsLoader } from './core/loaders/award';

export const routes = [
    {
        path: "/",
        element: <App />,
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
    
]