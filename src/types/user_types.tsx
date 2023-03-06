export type User = {
    company_name: string|null,
    created_at: string,
    date_of_birth: string,
    email: string,
    email_verified_at: string,
    first_name: string,
    gender_id: number|null,
    id: number,
    instagram_url: string|null,
    last_name: string,
    profession_group_id: number|null,
    updated_at: string,
    user_type_id: number,
    username: string,
    website_url: string|null,
    roles: {[key: number]: Role},
    all_permissions: {[key: number]: Permission}
}

export type Role = {
    id: number,
    name: string,
    guard_name: string,
    created_at: string,
    updated_at: string,
    pivot: {
        model_id: number,
        role_id: number, 
        model_type: string
    }
}

export type Permission = {
    id: number,
    name: string,
    guard_name: string,
    created_at: string,
    updated_at: string,
    pivot: {
        role_id: number, 
        permission_id: number, 
    }
}