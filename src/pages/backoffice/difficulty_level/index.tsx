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
import { DifficultyLevel } from '../../../types/difficulty_level_types';


export default function DifficultyLevelIndex() {
    const { t } = useTranslation();
    const difficulty_levels: PaginatedData<DifficultyLevel> = useLoaderData() as PaginatedData<DifficultyLevel>;

    useChangeTitle(t('difficulty_levels'));

    const columns = (placeholderRecord: DifficultyLevel) => (
        <>
            {/* title */}
            <div>{placeholderRecord.name}</div>            
            {/* actions */}
            <div className="flex gap-1">
                <Link to={`${placeholderRecord.id}/edit`}><Button type='button' title={t('edit')}><FaEdit /></Button></Link>
                <DeleteButton entityId={placeholderRecord.id} confirmText={t(`difficulty_level_confirm_delete`, { title: placeholderRecord.name })} title={t('delete')}><FaTrash /></DeleteButton>
            </div>
        </>
    )

    return (
        <PageStateDetector>
            
            <MessageBox type='warn' className='mb-3' icon={<AiFillWarning size={25}/>}>{t('warn_manually_handle_translations')}</MessageBox>
            <MessageBox type='warn' className='mb-3' icon={<AiFillWarning size={25}/>}>{t('warn_core_references')}</MessageBox>
            
            <Link to="create"><Button type="button">{t('add_difficulty_level')}</Button></Link>
            <PageTitle>{t('difficulty_levels')}</PageTitle>
            
            <PaginatedDataTable 
                headings={[t('name'), t('actions')]}
                emptyText={t('no_difficulty_levels')}
                paginatedData={difficulty_levels}
                columns={columns}
            />
        </PageStateDetector>
    );
    
}


