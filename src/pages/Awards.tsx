import { useLoaderData } from "react-router-dom";

export default function Awards() {
    const awards: PaginatedData<Award> = useLoaderData() as PaginatedData<Award>;
    return <div>{ awards.data.length > 0 ? awards.data.map((award) => <div key={award.id}>{award.name}</div>) : 'No Awards yet!' }</div>
};
