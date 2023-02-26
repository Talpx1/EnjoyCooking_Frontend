import { useLoaderData, Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { fetchCore } from '../../../services/core/core';
import useAuth from '../../../hooks/useAuth';

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

    const [userLogin, userLogout] = useAuth();

    const awards: PaginatedData<Award> = useLoaderData() as PaginatedData<Award>;
    
    return (
        <>
            <Button type='button' onClick={async () => userLogin()}><FaTrash /></Button>
            <Button type='button' onClick={userLogout}><FaTrash /></Button>
            <Link to="create"><Button type="button">Add Award</Button></Link>
            <div>
                { awards.data.length > 0 ? awards.data.map((award) => {
                    return (
                        <div className='flex' key={award.id}>
                            {award.name}
                            <Link to={`edit/${award.id}`}><Button type='button'><FaEdit /></Button></Link>
                            <Button type='button' onClick={() => deleteAward(award)}><FaTrash /></Button>
                        </div>
                    )
                }) : 'No Awards yet!' }
            </div>
        </>
    );
};
