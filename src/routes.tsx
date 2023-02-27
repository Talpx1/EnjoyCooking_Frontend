import Dashboard from './pages/backoffice/Dashboard';
import ErrorPage from './pages/ErrorPage';
import { awardLoader, awardsLoader } from './services/core/loaders/award';
import BackofficeLayout from './components/layouts/backoffice/BackofficeLayout';
import PublicLayout from './components/layouts/public/PublicLayout';
import { Route } from 'react-router-dom';
import AwardsIndex from './pages/backoffice/award/index';
import AwardsCreate from './pages/backoffice/award/create';
import Home from './pages/public/Home';
import { OAuthPkceCallbackComponent } from './services/auth/OAuthPkceCallbackComponent';
import RequireAuth from './services/auth/RequireAuth';
import Login from './pages/public/auth/Login';

export const routes = (
    <>
            {/* back-office */}
            <Route path="backoffice" element={<RequireAuth><BackofficeLayout /></RequireAuth>} errorElement={<ErrorPage />}>
                {/* dashboard */}
                <Route index element={<Dashboard />} />
                {/* awards */}
                <Route path="award" element={<AwardsIndex />} loader={awardsLoader} />
                <Route path="award/create" element={<AwardsCreate />} />
                <Route path="award/edit/:id" element={<AwardsCreate />} loader={ ({ params }) => awardLoader(params.id)}/>
            </Route>

        {/* public */}
        <Route path="/" element={<PublicLayout />} errorElement={<ErrorPage />}>
            {/* home */}
            <Route index element={<Home />} />
            {/* OAuth Callback */}
            <Route path="oauthcallback" element={<OAuthPkceCallbackComponent />} />
            {/* login*/}
            <Route path="login" element={<Login />} />
        </Route>
    </>
);