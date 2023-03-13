import { redirect } from "react-router-dom";
import { fetchCore } from "../../core";

import { can } from "../../../permissions";

export default async function destroyCategory({params}) {
    
    can('destroy_category', true);

    const result = await fetchCore({
        entity: 'category',
        entityId: params.id,
        action: 'delete'
    });

    return redirect("/backoffice/category");
};
