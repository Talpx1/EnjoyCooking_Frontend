import { useLoaderData, Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { fetchCore } from '../../../services/core/core';
import { PaginatedData } from '../../../types/core_types';
import { Award } from '../../../types/award_types';
import DeleteButton from '../../../components/ui/DeleteButton';
import Paginator from '../../../components/ui/Paginator';

async function deleteAward(award: Award){
    const confirmDelete = confirm(`Are you sure you want to delete the award "${award.name}"?`);
    if(!confirmDelete) return;
    try{
        const result = await fetchCore({
            entity: 'award',
            entityId: award.id,
            action: 'delete'
        });
    }catch(e){
        alert(e)
    }
}

export default function AwardsIndex() {
    const awards: PaginatedData<Award> = useLoaderData() as PaginatedData<Award>;

    return (
        <>
            <Link to="create"><Button type="button">Add Award</Button></Link>
            <div>
                { awards.data.length > 0 ? awards.data.map((award) => {
                    return (
                        <div className='flex' key={award.id}>
                            {award.name}
                            <Link to={`${award.id}/edit`}><Button type='button'><FaEdit /></Button></Link>
                            <DeleteButton entityId={award.id} confirmText={`Are you sure you want to delete the award "${award.name}"?`}><FaTrash /></DeleteButton>
                        </div>
                    )
                }) : 'No Awards yet!' }
            </div>
            <Paginator paginatedData={awards} />
        </>
    );
};
