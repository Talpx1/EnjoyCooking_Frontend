import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';
import { awardLoader, awardsLoader } from './core/loaders/award';
import BackofficeLayout from './components/layouts/backoffice/BackofficeLayout';
import PublicLayout from './components/layouts/public/PublicLayout';
import { Route } from 'react-router-dom';
import AwardsIndex from './pages/Awards/index';
import AwardsCreate from './pages/Awards/create';

export const routes = (
    <>
        {/* back-office */}
        <Route path="backoffice" element={<BackofficeLayout />} errorElement={<ErrorPage />}>
            {/* dashboard */}
            <Route index element={<Dashboard />} />
            {/* awards */}
            <Route path="award" element={<AwardsIndex />} loader={awardsLoader} />
            <Route path="award/create" element={<AwardsCreate />} />
            <Route path="award/edit/:id" element={<AwardsCreate />} loader={ ({ params }) => awardLoader(params.id)}/>
        </Route>

        {/* public */}
        <Route path="/" element={<PublicLayout />} errorElement={<ErrorPage />}></Route>
    </>
);