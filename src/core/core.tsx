export async function fetchCore({entity, entityId=undefined, action, data={}, hasAttachment=false}: ApiFetchCall){
    
    let url = `${import.meta.env.EC_CORE_URL}/api/${entity}`;
    if(entityId !== undefined) url = `${url}/${entityId}`;

    const method: HttpMethod = getVerbFromAction(action);
    let options: RequestInit = {
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': !hasAttachment ? 'application/json' : 'application/x-www-form-urlencoded'
        },
    };
    if(method !== 'GET' && method !== 'DELETE') options.body = JSON.stringify(data);

    const response = await fetch(url, options);
    
    if(!response.ok) throw new Error(`${response.status}: ${response.statusText}`);
    
    const result = await response.json();   
    return result;
}

function getVerbFromAction(action: ApiAction): HttpMethod{
    switch(action){
        case "index":
        case "show":
        default:
            return 'GET';

        case 'store': return 'POST';

        case 'update': return 'PUT';

        case 'delete': return 'DELETE'
    }
}