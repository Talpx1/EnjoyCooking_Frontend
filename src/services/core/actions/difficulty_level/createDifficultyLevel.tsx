import { redirect } from "react-router-dom";
import { fetchCore } from "../../core";
import { can } from "../../../permissions";

export default async function createDifficultyLevel({ request }) {
    can('store_difficulty_level', true);

    const formData = await request.formData();

    const response = await fetchCore({
        entity: 'difficulty_level',
        action: 'store',
        data: formData,
    });
    
    if(response?.hasValidationErrors) return response.errors;

    return redirect(`/backoffice/difficulty_level`);
};
