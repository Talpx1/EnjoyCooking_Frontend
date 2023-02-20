import { useLoaderData, Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

export default function AwardsIndex() {
    const awards: PaginatedData<Award> = useLoaderData() as PaginatedData<Award>;
    return (
        <>
            <Link to="create"><Button label="Add Award" type="button"/></Link>
            <div>
                { awards.data.length > 0 ? awards.data.map((award) => <div key={award.id}>{award.name}</div>) : 'No Awards yet!' }
            </div>
        </>
    );
};
