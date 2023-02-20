export async function fetchCore({entity, entityId=undefined}: {entity:string, entityId?: number }){
    let url = `${import.meta.env.EC_CORE_URL}/api/${entity}`;
    if(entityId !== undefined) url = `${url}/${entityId}`;

    const response = await fetch(url);
    
    if(!response.ok) throw new Error(`${response.status}: ${response.statusText}`);
    
    const result = await response.json();   
    return result;

}