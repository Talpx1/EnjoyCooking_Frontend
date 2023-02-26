import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchCore } from '../core/core';
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
                withAuth: false,
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