import { redirect } from "react-router-dom";
import { fetchCore } from "../../core";

import { can } from "../../../permissions";

export default async function destroyGender({params}) {
    can('destroy_gender', true);

    const result = await fetchCore({
        entity: 'gender',
        entityId: params.id,
        action: 'delete'
    });

    return redirect("/backoffice/gender");
};
