import { useLoaderData, Link, useNavigation } from 'react-router-dom';
import Button from '../../../components/ui/buttons/Button';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { PaginatedData } from '../../../types/core_types';
import { Award } from '../../../types/award_types';
import DeleteButton from '../../../components/ui/buttons/DeleteButton';
import PaginatedDataTable from '../../../components/ui/pagination/PaginatedDataTable';
import PageTitle from '../../../components/ui/backoffice/PageTitle';
import { useTranslation } from 'react-i18next';
import fallbackIcon from '../../../assets/fallbacks/fallback_icon.png';
import { useChangeTitle } from '../../../hooks/useChangeTitle';

export default function AwardsIndex() {
    const { t } = useTranslation();
    const awards: PaginatedData<Award> = useLoaderData() as PaginatedData<Award>;
    const navigation = useNavigation();

    useChangeTitle(t('awards'));

    const columns = (placeholderRecord: Award) => (
        <>
            <div className="flex gap-1 items-center">
                {/* img */}
                <img src={`data:image/png;base64, ${placeholderRecord.icons?.png}`} onError={(e)=>{e.target.src=fallbackIcon}} className='max-h-8' />
                {/* name */}
                <div>{placeholderRecord.name}</div>
            </div>
            {/* price */}
            <div>{placeholderRecord.price!==0 ? `${placeholderRecord.price.toFixed(2)}€` : t('free')}</div>
            {/* actions */}
            <div className="flex gap-1">
                <Link to={`${placeholderRecord.id}/edit`}><Button type='button' title={t('edit')}><FaEdit /></Button></Link>
                <DeleteButton entityId={placeholderRecord.id} confirmText={t(`award_confirm_delete`, { name: placeholderRecord.name })} title={t('delete')}><FaTrash /></DeleteButton>
            </div>
        </>
    )

    return (
        <div className={navigation.state === "loading" ? "opacity-50 grayscale" : ""}>
            <Link to="create"><Button type="button">{t('add_award')}</Button></Link>
            <PageTitle>{t('awards')}</PageTitle>
            
            <PaginatedDataTable 
                headings={[t('name'), t('price'), t('actions')]}
                emptyText={t('no_awards')}
                paginatedData={awards}
                columns={columns}
            />
        </div>
    );
    
}


