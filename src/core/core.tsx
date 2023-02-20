export async function fetchCore(entity:string){
    const response = await fetch(`${import.meta.env.EC_CORE_URL}/api/${entity}`);
    return await response.json();
}