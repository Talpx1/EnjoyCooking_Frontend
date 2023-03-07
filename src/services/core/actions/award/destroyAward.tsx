import { redirect } from "react-router-dom";
import { fetchCore } from "../../core";

import { can } from "../../../permissions";

export default async function destroyAward({params}) {
    
    can('destroy_award', true);

    const result = await fetchCore({
        entity: 'award',
        entityId: params.id,
        action: 'delete'
    });

    return redirect("/backoffice/award");
};
