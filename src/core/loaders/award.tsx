import { fetchCore } from "../core";

export async function awardsLoader(){
    return await fetchCore({
        entity: 'award'
    });
}

export async function awardLoader(id: any){
    return await fetchCore({
        entity: 'award',
        entityId: id 
    });
}