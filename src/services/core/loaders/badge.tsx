import { CoreFetchCall } from "../../../types/core_types";
import { fetchCore } from "../core";

export async function badgesLoader({request}){
    const url = new URL(request.url);
    const page = url.searchParams.get("page");

    let fetchOptions: CoreFetchCall = {
        entity: 'badge',
        action: 'index',
        withAuth: false,
    }

    if(page) fetchOptions.queryStringParams = {page: page};

    return await fetchCore(fetchOptions);
}

export async function badgeLoader(id: any){
    return await fetchCore({
        entity: 'badge',
        entityId: id,
        action:'show',
        withAuth: false
    });
}