import { redirect } from "react-router-dom";
import { fetchCore } from "../../core";

import { can } from "../../../permissions";

export default async function destroyBadge({params}) {
    
    can('destroy_badge', true);

    const result = await fetchCore({
        entity: 'badge',
        entityId: params.id,
        action: 'delete'
    });

    return redirect("/backoffice/badge");
};
