import { redirect } from "react-router-dom";
import { fetchCore } from "../../core";
import { can } from "../../../permissions";

export default async function createCategory({ request }) {
    can('store_category', true);

    const formData = await request.formData();

    const response = await fetchCore({
        entity: 'category',
        action: 'store',
        data: formData,
    });
    
    if(response?.hasValidationErrors) return response.errors;

    return redirect(`/backoffice/category`);
};
