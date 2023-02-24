import { fetchCore } from "../core/core";
import pkceChallenge from 'pkce-challenge'
import { objToQueryString } from './url';
import { redirect, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export async function login(data: CoreLoginPayload) {
    

    return response;
}

export function userLogin(email: string, password: string) {
    const {code_verifier, code_challenge} = pkceChallenge();
    const {code_verifier: state} = pkceChallenge();

    sessionStorage.setItem('code_verifier', code_verifier);
    sessionStorage.setItem('state', state);

    const queryString = objToQueryString({
        client_id: import.meta.env.EC_PKCE_CLIENT_ID,
        redirect_uri: `${import.meta.env.EC_APP_URL}/oauthcallback`,
        response_type: 'code',
        scope: '',
        state: state,
        code_challenge: code_challenge,
        code_challenge_method: 'S256',
    });

    const url = `${import.meta.env.EC_CORE_URL}/oauth/authorize?${queryString}`;

    window.location.href = url;
}

export function OAuthPkceCallbackComponent() {
    
    const navigate = useNavigate();

    useEffect(()=>{
        const callback = async () => {
            const urlParams = new URLSearchParams(window.location.search);

            if(!(urlParams.has('state') && urlParams.has('code'))) return;

            const {code, state} = Object.fromEntries(urlParams);

            if(state !== sessionStorage.getItem('state')) throw new Error("Invalid login authorization!");
            
            const response = await fetchCore({
                entity: 'oauth/token',
                asForm: true,
                forceMethod: 'POST',
                isApi: false,
                data:{
                    grant_type: 'authorization_code',
                    client_id: import.meta.env.EC_PKCE_CLIENT_ID,
                    redirect_uri: `${import.meta.env.EC_APP_URL}/oauthcallback`,
                    code_verifier: sessionStorage.getItem('code_verifier'),
                    code: code,
                }
            });

            localStorage.setItem('EC_ACCESS_TOKEN', response.access_token);
            localStorage.setItem('EC_REFRESH_TOKEN', response.refresh_token);
        };
        
        callback();
        navigate("/backoffice", {replace: true});

        return () => {
            sessionStorage.removeItem('state');
            sessionStorage.removeItem('code_verifier');
        }
    },[])
    
    return null;
};


export async function clientLogin() {

    const response = await fetchCore({
        entity: "oauth/token",
        forceMethod: 'POST',
        asForm: true,
        isApi: false,
        data: {
            grant_type: "client_credentials",
            client_id: 2, //TODO reference this from some sort of secure env
            client_secret: 'JMLmH69UoEbbzw1ciKjBv47aWEdnbwSMJ7G7E73D', //TODO reference this from some sort of secure env
            scope: ''
        }
    });

    sessionStorage.setItem('EC_CLIENT_ACCESS_TOKEN', response.access_token);
}

export function cleanClientLogin(): void{
    clientTokenExists() && sessionStorage.removeItem('EC_CLIENT_ACCESS_TOKEN'); //TODO: remove from sessionStorage. This should not be stored on the client. Idk how to sore it elsewhere tho :/
}

export function cleanUserLogin(): void{
    userTokenExists() && localStorage.removeItem('EC_ACCESS_TOKEN');
}

export function clientTokenExists(): boolean{
    return sessionStorage.getItem('EC_CLIENT_ACCESS_TOKEN') !== undefined && sessionStorage.getItem('EC_CLIENT_ACCESS_TOKEN') !== null;
}

export function userTokenExists(): boolean{
    return localStorage.getItem('EC_ACCESS_TOKEN') !== undefined && localStorage.getItem('EC_ACCESS_TOKEN') !== null;
}