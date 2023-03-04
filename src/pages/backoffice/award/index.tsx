import { useLoaderData, Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { PaginatedData } from '../../../types/core_types';
import { Award } from '../../../types/award_types';
import DeleteButton from '../../../components/ui/DeleteButton';
import PaginatedDataTable from '../../../components/ui/PaginatedDataTable';
import PageTitle from '../../../components/ui/PageTitle';

export default function AwardsIndex() {
    const awards: PaginatedData<Award> = useLoaderData() as PaginatedData<Award>;


    const columns = (placeholderRecord: Award) => (
        <>
            <div className="flex gap-1 items-center">
                {/* img */}
                <img src={`data:image/png;base64, ${placeholderRecord.icons?.png}`} className='max-h-8' />
                {/* name */}
                <div>{placeholderRecord.name}</div>
            </div>
            {/* price */}
            <div>{placeholderRecord.price!==0 ? `${placeholderRecord.price.toFixed(2)}€` : 'FREE'}</div>
            {/* actions */}
            <div className="flex gap-1">
                <Link to={`${placeholderRecord.id}/edit`}><Button type='button' title='Edit'><FaEdit /></Button></Link>
                <DeleteButton entityId={placeholderRecord.id} confirmText={`Are you sure you want to delete the award "${placeholderRecord.name}"?`} title='Delete'><FaTrash /></DeleteButton>
            </div>
        </>
    )



    return (
        <>
            <Link to="create" className='block mb-5'><Button type="button">Add Award</Button></Link>
            <PageTitle>Awards</PageTitle>
            
            <PaginatedDataTable 
                headings={['Name', 'Price', 'Actions']}
                emptyText='No Awards yet!'
                paginatedData={awards}
                columns={columns}
            />
        </>
    );
    
}


