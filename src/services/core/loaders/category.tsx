import { Category } from '../../../types/category_types';
import { CoreFetchCall, PaginatedData } from '../../../types/core_types';
import { fetchCore } from "../core";

export async function firstLevelCategoriesLoader({request}){
    const url = new URL(request.url);
    const page = url.searchParams.get("page");

    let fetchOptions: CoreFetchCall = {
        entity: 'category/first-level',
        forceMethod: 'get',
        withAuth: false,
    }

    if(page) fetchOptions.queryStringParams = {page: page};

    return await fetchCore(fetchOptions);
}

export async function filteredCategoriesLoader(search: string){
    const MIN_QUERY_LENGTH = 3

    if(search===undefined || search===null) return;
    if(search.length < MIN_QUERY_LENGTH) return;

    const categories: PaginatedData<Category> = await fetchCore({
        entity: 'category',
        action: 'index',
        withAuth: false,
        queryStringParams: {
            search: search
        }
    });

    return categories.data.map(category => {return {value: category.id, label: category.name}});
}

export async function categoryLoader(id: any){
    return await fetchCore({
        entity: 'category',
        entityId: id,
        action:'show',
        withAuth: false
    });
}

export async function getSubcategories(category_id: number, page:number){
    return fetchCore({
        entity: `category/${category_id}/subcategories`,
        forceMethod: 'get',
        withAuth: false,
        queryStringParams: {page: page}
    });
}