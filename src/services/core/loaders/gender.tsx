import { CoreFetchCall } from "../../../types/core_types";
import { fetchCore } from "../core";

export async function gendersLoader({request}){
    const url = new URL(request.url);
    const page = url.searchParams.get("page");

    let fetchOptions: CoreFetchCall = {
        entity: 'gender',
        action: 'index',
        withAuth: false,
    }

    if(page) fetchOptions.queryStringParams = {page: page};

    return await fetchCore(fetchOptions);
}

export async function genderLoader(id: any){
    return await fetchCore({
        entity: 'gender',
        entityId: id,
        action:'show',
        withAuth: true
    });
}