import Dashboard from './pages/backoffice/Dashboard';
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
import createAward from './services/core/actions/createAward';
import editAward from './services/core/actions/editAward';
import destroyAward from './services/core/actions/destroyAward';
import Can from './components/conditionals/Can';
import ErrorScreen from './pages/ErrorScreen';
import ErrorPage from './pages/backoffice/errors/ErrorPage';

export const routes = (
    <>
            {/* back-office */}
            <Route path="backoffice" element={<RequireAuth><BackofficeLayout /></RequireAuth>} errorElement={<ErrorScreen />}>
                <Route errorElement={<ErrorPage/>}>
                    {/* dashboard */}
                    <Route index element={<Dashboard />} />
                    {/* awards */}
                    <Route path="award" element={<Can permission='create_award' shouldThrow={true}><AwardsIndex /></Can>} loader={awardsLoader} />
                    <Route path="award/create" element={<Can permission='create_award' shouldThrow={true}><AwardsCreate /></Can>} action={createAward} />
                    <Route path="award/:id/edit" element={<Can permission='edit_award' shouldThrow={true}><AwardsCreate /></Can>} loader={ ({ params }) => awardLoader(params.id)} action={editAward}/>
                    <Route path="award/:id/destroy" action={destroyAward}/>
                </Route>
            </Route>

        {/* public */}
        <Route path="/" element={<PublicLayout />} errorElement={<ErrorScreen />}>
            {/* home */}
            <Route index element={<Home />} />
            {/* OAuth Callback */}
            <Route path="oauthcallback" element={<OAuthPkceCallbackComponent />} />
            {/* login*/}
            <Route path="login" element={<Login />} />
        </Route>
    </>
);