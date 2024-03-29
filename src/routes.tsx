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
import createAward from './services/core/actions/award/createAward';
import editAward from './services/core/actions/award/editAward';
import destroyAward from './services/core/actions/award/destroyAward';
import Can from './components/conditionals/Can';
import ErrorScreen from './pages/ErrorScreen';
import ErrorPage from './pages/backoffice/errors/ErrorPage';
import { badgeLoader, badgesLoader } from './services/core/loaders/badge';
import BadgesIndex from './pages/backoffice/badge';
import BadgeCreate from './pages/backoffice/badge/create';
import createBadge from './services/core/actions/badge/createBadge';
import editBadge from './services/core/actions/badge/editBadge';
import destroyBadge from './services/core/actions/badge/destroyBadge';
import CategoriesIndex from './pages/backoffice/category';
import { firstLevelCategoriesLoader, categoryLoader } from './services/core/loaders/category';
import CategoryCreate from './pages/backoffice/category/create';
import createCategory from './services/core/actions/category/createCategory';
import destroyCategory from './services/core/actions/category/destroyCategory';
import CoursesIndex from './pages/backoffice/course';
import editCategory from './services/core/actions/category/editCategory';
import { courseLoader, coursesLoader } from './services/core/loaders/course';
import CourseCreate from './pages/backoffice/course/create';
import createCourse from './services/core/actions/course/createCourse';
import editCourse from './services/core/actions/course/editCourse';
import destroyCourse from './services/core/actions/course/destroyCourse';
import DifficultyLevelIndex from './pages/backoffice/difficulty_level';
import DifficultyLevelCreate from './pages/backoffice/difficulty_level/create';
import { difficultyLevelLoader, difficultyLevelsLoader } from './services/core/loaders/difficulty_level';
import createDifficultyLevel from './services/core/actions/difficulty_level/createDifficultyLevel';
import editDifficultyLevel from './services/core/actions/difficulty_level/editDifficultyLevel';
import destroyDifficultyLevel from './services/core/actions/difficulty_level/destroyDifficultyLevel';
import GenderIndex from './pages/backoffice/gender';
import { genderLoader, gendersLoader } from './services/core/loaders/gender';
import GenderCreate from './pages/backoffice/gender/create';
import createGender from './services/core/actions/gender/createGender';
import editGender from './services/core/actions/gender/editGender';
import destroyGender from './services/core/actions/gender/destroyGenderl';

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
                    {/* badges */}
                    <Route path="badge" element={<Can permission='create_badge' shouldThrow={true}><BadgesIndex /></Can>} loader={badgesLoader} />
                    <Route path="badge/create" element={<Can permission='create_badge' shouldThrow={true}><BadgeCreate /></Can>} action={createBadge} />
                    <Route path="badge/:id/edit" element={<Can permission='edit_badge' shouldThrow={true}><BadgeCreate /></Can>} loader={ ({ params }) => badgeLoader(params.id)} action={editBadge}/>
                    <Route path="badge/:id/destroy" action={destroyBadge}/>
                    {/* categories */}
                    <Route path="category" element={<Can permission='create_category' shouldThrow={true}><CategoriesIndex /></Can>} loader={firstLevelCategoriesLoader}/>
                    <Route path="category/create" element={<Can permission='create_category' shouldThrow={true}><CategoryCreate /></Can>} action={createCategory} />
                    <Route path="category/:id/edit" element={<Can permission='edit_category' shouldThrow={true}><CategoryCreate /></Can>} loader={ ({ params }) => categoryLoader(params.id)} action={editCategory}/>
                    <Route path="category/:id/destroy" action={destroyCategory}/>
                     {/* courses */}
                    <Route path="course" element={<Can permission='create_course' shouldThrow={true}><CoursesIndex /></Can>} loader={coursesLoader}/>
                    <Route path="course/create" element={<Can permission='create_course' shouldThrow={true}><CourseCreate /></Can>} action={createCourse} />
                    <Route path="course/:id/edit" element={<Can permission='edit_course' shouldThrow={true}><CourseCreate /></Can>} loader={ ({ params }) => courseLoader(params.id)} action={editCourse}/>
                    <Route path="course/:id/destroy" action={destroyCourse}/>
                    {/* difficulty levels */}
                    <Route path="difficulty_level" element={<Can permission='create_difficulty_level' shouldThrow={true}><DifficultyLevelIndex /></Can>} loader={difficultyLevelsLoader}/>
                    <Route path="difficulty_level/create" element={<Can permission='create_difficulty_level' shouldThrow={true}><DifficultyLevelCreate /></Can>} action={createDifficultyLevel} />
                    <Route path="difficulty_level/:id/edit" element={<Can permission='edit_difficulty_level' shouldThrow={true}><DifficultyLevelCreate /></Can>} loader={ ({ params }) => difficultyLevelLoader(params.id)} action={editDifficultyLevel}/>
                    <Route path="difficulty_level/:id/destroy" action={destroyDifficultyLevel}/>
                    {/* genders */}
                    <Route path="gender" element={<Can permission='create_gender' shouldThrow={true}><GenderIndex /></Can>} loader={gendersLoader}/>
                    <Route path="gender/create" element={<Can permission='create_gender' shouldThrow={true}><GenderCreate /></Can>} action={createGender} />
                    <Route path="gender/:id/edit" element={<Can permission='edit_gender' shouldThrow={true}><GenderCreate /></Can>} loader={ ({ params }) => genderLoader(params.id)} action={editGender}/>
                    <Route path="gender/:id/destroy" action={destroyGender}/>
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