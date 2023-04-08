import { redirect } from "react-router-dom";
import { fetchCore } from "../../core";

import { can } from "../../../permissions";

export default async function destroyDifficultyLevel({params}) {
    can('destroy_difficulty_level', true);

    const result = await fetchCore({
        entity: 'difficulty_level',
        entityId: params.id,
        action: 'delete'
    });

    return redirect("/backoffice/difficulty_level");
};
