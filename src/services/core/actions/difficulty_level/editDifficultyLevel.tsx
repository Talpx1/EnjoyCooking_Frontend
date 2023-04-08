import { redirect } from "react-router-dom";
import { fetchCore } from "../../core";
import { can } from "../../../permissions";

export default async function editDifficultyLevel({ request, params }) {
    can('update_difficulty_level', true);

    const formData = await request.formData();

    const response = await fetchCore({
        entity: 'difficulty_level',
        entityId: params.id,
        action: 'update',
        data: formData,
    });
    
    if(response?.hasValidationErrors) return response.errors;

    return redirect(`/backoffice/difficulty_level`);
};
