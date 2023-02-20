import { useLoaderData } from 'react-router-dom';

export default function AwardsCreate() {
    const award: Award = useLoaderData() as Award;
    const isEdit: boolean = award!==undefined;

    return (
        <>
            <h1>CREATE AWARD PAGE</h1>

            {isEdit && JSON.stringify(award)}
        </>
    );
};
