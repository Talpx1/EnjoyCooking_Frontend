import { clientLogin, clientTokenExists, userTokenExists } from "../services/auth";
import { objToQueryString } from "../services/url";

export async function fetchCore({
    entity, 
    entityId = undefined,
    action = undefined, 
    data = {}, 
    asForm = false, 
    isApi = true,
    forceMethod = undefined,
    asClient = false,
    queryStringParams = undefined
}: CoreFetchCall){

    if(asClient && !clientTokenExists()) await clientLogin()
    
    if(action===undefined && forceMethod===undefined) throw new Error("Error fetching core: action and forceMethod can't be both undefined!");

    const url = buildUrl(isApi, entity, entityId, queryStringParams);

    const method = action!==undefined ? getVerbFromAction(action) : forceMethod;
    if(method===undefined) throw new Error("Error fetching core: method is undefined!");

    const options = buildOptions(method, asForm, data, asClient);

    const response = await fetch(url, options);
    if(!response.ok) throw new Error(`${response.status}: ${response.statusText}`);
    
    const result = await response.json();   
    return result;
}

function buildOptions(method: HttpMethod, asForm: boolean, data: object, asClient: boolean): RequestInit{
    let options: RequestInit = {
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': !asForm ? 'application/json' : 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Authorization': getAuthorizationToken(asClient),
        },
    };

    if(method !== 'GET' && method !== 'DELETE'){ 
        options.body = !asForm ? JSON.stringify(data) : objToQueryString(data);
    }

    return options;
}

function getAuthorizationToken(asClient: boolean){
    if(asClient){
        return  clientTokenExists() ? `Bearer ${sessionStorage.getItem('EC_CLIENT_ACCESS_TOKEN')}` : '';
    }

    return userTokenExists() ? `Bearer ${localStorage.getItem('EC_ACCESS_TOKEN')}` : '';
}

function buildUrl(isApi: boolean, entity: string, entityId?: number, queryStringParams?: object): string{
    let url = import.meta.env.EC_CORE_URL;
    if(isApi) url = `${url}/api`;
    url = `${url}/${entity}`;
    if(entityId !== undefined) url = `${url}/${entityId}`;
    if(queryStringParams !== undefined) url = `${url}?${objToQueryString(queryStringParams)}`;
    return url;
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

