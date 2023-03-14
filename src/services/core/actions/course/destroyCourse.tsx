import { redirect } from "react-router-dom";
import { fetchCore } from "../../core";

import { can } from "../../../permissions";

export default async function destroyCourse({params}) {
    can('destroy_course', true);

    const result = await fetchCore({
        entity: 'course',
        entityId: params.id,
        action: 'delete'
    });

    return redirect("/backoffice/course");
};
