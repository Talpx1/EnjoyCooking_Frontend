import { useLoaderData, Link } from 'react-router-dom';
import Button from '../../../components/ui/buttons/Button';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { PaginatedData } from '../../../types/core_types';
import { Course } from '../../../types/course_types';
import DeleteButton from '../../../components/ui/buttons/DeleteButton';
import PaginatedDataTable from '../../../components/ui/pagination/PaginatedDataTable';
import PageTitle from '../../../components/ui/backoffice/PageTitle';
import { useTranslation } from 'react-i18next';
import { useChangeTitle } from '../../../hooks/useChangeTitle';
import PageStateDetector from '../../../components/ui/backoffice/PageStateDetector';
import MessageBox from '../../../components/ui/MessageBox';
import {AiFillWarning} from 'react-icons/ai';


export default function CoursesIndex() {
    const { t } = useTranslation();
    const courses: PaginatedData<Course> = useLoaderData() as PaginatedData<Course>;

    useChangeTitle(t('courses'));

    const columns = (placeholderRecord: Course) => (
        <>
            {/* title */}
            <div>{placeholderRecord.name}</div>            
            {/* actions */}
            <div className="flex gap-1">
                <Link to={`${placeholderRecord.id}/edit`}><Button type='button' title={t('edit')}><FaEdit /></Button></Link>
                <DeleteButton entityId={placeholderRecord.id} confirmText={t(`course_confirm_delete`, { title: placeholderRecord.name })} title={t('delete')}><FaTrash /></DeleteButton>
            </div>
        </>
    )

    return (
        <PageStateDetector>
            
            <MessageBox type='warn' className='mb-3' icon={<AiFillWarning size={25}/>}>{t('warn_manually_handle_translations')}</MessageBox>
            <MessageBox type='warn' className='mb-3' icon={<AiFillWarning size={25}/>}>{t('warn_core_references')}</MessageBox>
            
            <Link to="create"><Button type="button">{t('add_course')}</Button></Link>
            <PageTitle>{t('courses')}</PageTitle>
            
            <PaginatedDataTable 
                headings={[t('name'), t('actions')]}
                emptyText={t('no_courses')}
                paginatedData={courses}
                columns={columns}
            />
        </PageStateDetector>
    );
    
}


