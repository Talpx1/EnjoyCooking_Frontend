import { FormMethod } from "react-router-dom";
import { userTokenExists } from "../auth/auth";
import { objToQueryString } from "../url";
import { ApiAction, ContentTypes, CoreFetchCall } from '../../types/core_types';
import { formDataToObj, objToFormData } from "../formData";

export async function fetchCore({
    entity, 
    entityId = undefined,
    action = undefined, 
    data = {}, 
    contentType = 'application/json', 
    isApi = true,
    forceMethod = undefined,
    withAuth = true,
    queryStringParams = undefined,
    throwForValidationErrors = false
}: CoreFetchCall ){
    
    if(action===undefined && forceMethod===undefined) throw new Error("Error fetching core: action and forceMethod can't be both undefined!");

    if(data instanceof FormData && contentType !== 'multipart/form-data') data = formDataToObj(data);

    const url = buildUrl(isApi, entity, withAuth, entityId, queryStringParams);

    const method = action!==undefined ? getVerbFromAction(action) : forceMethod;
    if(method===undefined) throw new Error("Error fetching core: method is undefined!");

    const options = buildOptions(method, contentType, data, withAuth);

    const response = await fetch(url, options);

    if(!throwForValidationErrors && response.status === 422) {
        const result =  await response.json();
        
        return {
            hasValidationErrors: true,
            errors: result.errors
        }
    }

    if(!response.ok) throw new Error(`${response.status}: ${response.statusText}`);
    
    const result = await response.json();   
    return result;
}

function buildOptions(method: FormMethod, contentType: ContentTypes, data: object | FormData, withAuth: boolean): RequestInit{
    let options: RequestInit = {
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Accept': 'application/json',
            'Authorization': (withAuth && getAuthorizationToken()) || '',
        }
    };

    if(contentType !== 'multipart/form-data') options.headers['Content-Type'] = contentType;

    if(method !== 'get' && method !== 'delete'){ 
        switch(contentType){
            default:
            case 'application/json': 
                options.body = JSON.stringify(data);
                break;
            case 'application/x-www-form-urlencoded':
                options.body = objToQueryString(data);
                break;
            case 'multipart/form-data':
                if(method !== 'post') {//this fixes a php bug which wont read multipart form data if method isnt post
                    data instanceof FormData ? data.append('_method', method) : data['_method'] = method;
                    options.method = 'post'
                }
                options.body = data instanceof FormData ? data : objToFormData(data);
                break;
        }
    }

    return options;
}
function getAuthorizationToken(){
    return userTokenExists() ? `Bearer ${localStorage.getItem('EC_ACCESS_TOKEN')}` : '';
}

function buildUrl(isApi: boolean, entity: string, withAuth: boolean,  entityId?: number, queryStringParams?: object): string{
    let url = import.meta.env.EC_CORE_URL;
    if(isApi) url = `${url}/api${(!withAuth && '/guest') || ''}`;
    url = `${url}/${entity}`;
    if(entityId !== undefined) url = `${url}/${entityId}`;
    if(queryStringParams !== undefined) url = `${url}?${objToQueryString(queryStringParams)}`;
    return url;
}

function getVerbFromAction(action: ApiAction): FormMethod{
    switch(action){
        case "index":
        case "show":
        default:
            return 'get';
        case 'store': return 'post';
        case 'update': return 'put';
        case 'delete': return 'delete'
    }
}

