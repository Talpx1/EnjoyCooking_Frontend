import { CoreFetchCall } from "../../../types/core_types";
import { fetchCore } from "../core";

export async function difficultyLevelsLoader({request}){
    const url = new URL(request.url);
    const page = url.searchParams.get("page");

    let fetchOptions: CoreFetchCall = {
        entity: 'difficulty_level',
        action: 'index',
        withAuth: false,
    }

    if(page) fetchOptions.queryStringParams = {page: page};

    return await fetchCore(fetchOptions);
}

export async function difficultyLevelLoader(id: any){
    return await fetchCore({
        entity: 'difficulty_level',
        entityId: id,
        action:'show',
        withAuth: false
    });
}