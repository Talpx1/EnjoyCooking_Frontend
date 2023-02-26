import pkceChallenge from 'pkce-challenge'
import { objToQueryString } from '../url';

export function userLogin() {
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

export function cleanUserLogin(): void{
    if(!userTokenExists()) return;
    localStorage.removeItem('EC_ACCESS_TOKEN');
    localStorage.removeItem('EC_REFRESH_TOKEN');
}

export function userTokenExists(): boolean{
    return localStorage.getItem('EC_ACCESS_TOKEN') !== undefined && localStorage.getItem('EC_ACCESS_TOKEN') !== null;
}