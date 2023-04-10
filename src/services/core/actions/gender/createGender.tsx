import { redirect } from "react-router-dom";
import { fetchCore } from "../../core";
import { can } from "../../../permissions";

export default async function createGender({ request }) {
    can('store_gender', true);

    const formData = await request.formData();

    const response = await fetchCore({
        entity: 'gender',
        action: 'store',
        data: formData,
    });
    
    if(response?.hasValidationErrors) return response.errors;

    return redirect(`/backoffice/gender`);
};
