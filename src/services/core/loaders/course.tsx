import { CoreFetchCall } from "../../../types/core_types";
import { fetchCore } from "../core";

export async function coursesLoader({request}){
    const url = new URL(request.url);
    const page = url.searchParams.get("page");

    let fetchOptions: CoreFetchCall = {
        entity: 'course',
        action: 'index',
        withAuth: false,
    }

    if(page) fetchOptions.queryStringParams = {page: page};

    return await fetchCore(fetchOptions);
}

export async function courseLoader(id: any){
    return await fetchCore({
        entity: 'course',
        entityId: id,
        action:'show',
        withAuth: false
    });
}