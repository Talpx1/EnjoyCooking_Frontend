import { useLoaderData, Link } from 'react-router-dom';
import Button from '../../../components/ui/buttons/Button';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { PaginatedData } from '../../../types/core_types';
import { Badge } from '../../../types/badge_types';
import DeleteButton from '../../../components/ui/buttons/DeleteButton';
import PaginatedDataTable from '../../../components/ui/pagination/PaginatedDataTable';
import PageTitle from '../../../components/ui/backoffice/PageTitle';
import { useTranslation } from 'react-i18next';
import { useChangeTitle } from '../../../hooks/useChangeTitle';
import PageStateDetector from '../../../components/ui/backoffice/PageStateDetector';
import Description from '../../../components/ui/formatting/Description';
import { AiFillWarning } from 'react-icons/ai';
import MessageBox from '../../../components/ui/MessageBox';

export default function BadgesIndex() {
    const { t } = useTranslation();
    const badges: PaginatedData<Badge> = useLoaderData() as PaginatedData<Badge>;
    const maxLength = import.meta.env.EC_MAX_DESCRIPTIONS_LENGTH;

    useChangeTitle(t('badges'));

    const columns = (placeholderRecord: Badge) => (
        <>
            {/* title */}
            <div>{placeholderRecord.title}</div>
            {/* description */}
            <Description maxLength={maxLength}>{placeholderRecord?.description}</Description>
            {/* actions */}
            <div className="flex gap-1">
                <Link to={`${placeholderRecord.id}/edit`}><Button type='button' title={t('edit')}><FaEdit /></Button></Link>
                <DeleteButton entityId={placeholderRecord.id} confirmText={t(`badge_confirm_delete`, { title: placeholderRecord.title })} title={t('delete')}><FaTrash /></DeleteButton>
            </div>
        </>
    )

    return (
        <PageStateDetector>

            <MessageBox type='warn' className='mb-3' icon={<AiFillWarning size={25}/>}>{t('warn_manually_handle_translations')}</MessageBox>

            <Link to="create"><Button type="button">{t('add_badge')}</Button></Link>
            <PageTitle>{t('badges')}</PageTitle>
            
            <PaginatedDataTable 
                headings={[t('title'), t('description'), t('actions')]}
                emptyText={t('no_badges')}
                paginatedData={badges}
                columns={columns}
            />
        </PageStateDetector>
    );
    
}


