import { CoreFetchCall } from "../../../types/core_types";
import { fetchCore } from "../core";

export async function awardsLoader({request}){
    const url = new URL(request.url);
    const page = url.searchParams.get("page");

    let fetchOptions: CoreFetchCall = {
        entity: 'award',
        action: 'index',
        withAuth: false,
    }

    if(page) fetchOptions.queryStringParams = {page: page};

    return await fetchCore(fetchOptions);
}

export async function awardLoader(id: any){
    return await fetchCore({
        entity: 'award',
        entityId: id,
        action:'show',
        withAuth: false
    });
}