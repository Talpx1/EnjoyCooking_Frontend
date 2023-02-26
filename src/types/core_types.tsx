type PaginatedData<T> = {
    current_page: number,
    data: T[],
    first_page_url: string,
    from: number,
    last_page: number,
    last_page_url: string,
    links: object[],
    next_page_url: string|null,
    path: string,
    per_page: number,
    prev_page_url: string|null,
    to: number,
    total: number,
};

type ApiAction = 'index'| 'show' | 'store' | 'update' | 'delete';

type CoreFetchCall = {
    entity:string, 
    entityId?: number, 
    action?: ApiAction,
    data?: object,
    asForm?: boolean,
    isApi?: boolean,
    forceMethod?: HttpMethod,
    withAuth?: boolean,
    queryStringParams?: object,
};

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';