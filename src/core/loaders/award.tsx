import { fetchCore } from "../core";

export async function awardsLoader(){
    return await fetchCore('award');
}