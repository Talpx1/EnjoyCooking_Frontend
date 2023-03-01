import { FormEncType, FormMethod } from "react-router-dom";

export type PaginatedData<T> = {
    current_page: number,
    data: T[],
    first_page_url: string,
    from: number,
    last_page: number,
    last_page_url: string,
    links: {active:boolean, url:string|null, label:string}[],
    next_page_url: string|null,
    path: string,
    per_page: number,
    prev_page_url: string|null,
    to: number,
    total: number,
};

export type ApiAction = 'index'| 'show' | 'store' | 'update' | 'delete';

export type CoreFetchCall = {
    entity:string, 
    entityId?: number, 
    action?: ApiAction,
    data?: object | FormData,
    contentType?: ContentTypes,
    isApi?: boolean,
    forceMethod?: FormMethod,
    withAuth?: boolean,
    queryStringParams?: object,
    throwForValidationErrors?: boolean
};

export type ContentTypes = FormEncType | 'application/json'