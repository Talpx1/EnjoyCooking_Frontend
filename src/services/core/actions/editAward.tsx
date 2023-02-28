import { redirect } from "react-router-dom";
import { fetchCore } from "../core";

export default async function editAward({ request, params }) {
    const formData = await request.formData();

    const response = await fetchCore({
        entity: 'award',
        entityId: params.id,
        action: 'update',
        contentType: 'multipart/form-data',
        data: formData,
    });
    
    if(response?.hasValidationErrors) return response.errors;

    return redirect(`/backoffice/award`);
};
