import { useState } from "react";
import useSessionStorage from "./useSessionStorage";

export default function useSessionCache() {
    const [cache, setCache] = useSessionStorage('cache', null);
    const parsedCache = JSON.parse(cache);

    return {checkCache, addToCache, getCache, getOrCache};

    function checkCache(key:string):boolean{
        if(!parsedCache) return false;
        return parsedCache.hasOwnProperty(key) && parsedCache[key]!==undefined && parsedCache[key]!==null;
    }

    function addToCache(key:string, value:any): void{
        setCache(JSON.stringify({...parsedCache??[], [key]: value}));
    }

    function getCache(key:string): any{
        if(!parsedCache) return false;
        return parsedCache[key];
    }

    async function getOrCache(key:string, fallback:Function): Promise<any>{
        if(checkCache(key)) return getCache(key);
        const value = await fallback()
        addToCache(key, value)
        return value;
    }

}