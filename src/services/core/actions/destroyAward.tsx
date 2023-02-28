import { redirect } from "react-router-dom";
import { fetchCore } from "../core";

export default async function destroyAward({params}) {
    const result = await fetchCore({
        entity: 'award',
        entityId: params.id,
        action: 'delete'
    });

    return redirect("/backoffice/award");
};
