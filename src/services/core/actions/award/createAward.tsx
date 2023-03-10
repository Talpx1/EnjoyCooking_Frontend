import { redirect } from "react-router-dom";
import { fetchCore } from "../../core";
import { can } from "../../../permissions";

export default async function createAward({ request }) {
    can('store_award', true);

    const formData = await request.formData();

    const response = await fetchCore({
        entity: 'award',
        action: 'store',
        contentType: 'multipart/form-data',
        data: formData,
    });
    
    if(response?.hasValidationErrors) return response.errors;

    return redirect(`/backoffice/award`);
};
