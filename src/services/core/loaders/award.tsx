import { fetchCore } from "../core";

export async function awardsLoader(){
    return await fetchCore({
        entity: 'award',
        action: 'index',
        withAuth: false
    });
}

export async function awardLoader(id: any){
    return await fetchCore({
        entity: 'award',
        entityId: id,
        action:'show',
        withAuth: false
    });
}