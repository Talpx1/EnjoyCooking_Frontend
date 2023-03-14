import { redirect } from "react-router-dom";
import { fetchCore } from "../../core";
import { can } from "../../../permissions";

export default async function createCourse({ request }) {
    can('store_course', true);

    const formData = await request.formData();

    const response = await fetchCore({
        entity: 'course',
        action: 'store',
        data: formData,
    });
    
    if(response?.hasValidationErrors) return response.errors;

    return redirect(`/backoffice/course`);
};
