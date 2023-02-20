import { useLoaderData } from 'react-router-dom';

export default function AwardsCreate() {
    const award: Award = useLoaderData() as Award;

    return (
        <>
            <h1>CREATE AWARD PAGE</h1>

            {award!==undefined && JSON.stringify(award)}
        </>
    );
};
