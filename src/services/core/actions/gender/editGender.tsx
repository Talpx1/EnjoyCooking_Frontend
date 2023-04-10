import { redirect } from "react-router-dom";
import { fetchCore } from "../../core";
import { can } from "../../../permissions";

export default async function editGender({ request, params }) {
    can('update_gender', true);

    const formData = await request.formData();

    const response = await fetchCore({
        entity: 'gender',
        entityId: params.id,
        action: 'update',
        data: formData,
    });
    
    if(response?.hasValidationErrors) return response.errors;

    return redirect(`/backoffice/gender`);
};
