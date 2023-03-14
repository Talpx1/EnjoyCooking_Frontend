import { PaginatedData } from "./core_types"

export type Category = {
    created_at: string,
    id: number,
    slug: string,
    name: string,
    parent_category_id: number,
    updated_at: string,
    subcategories?: PaginatedData<Category>,
    parent: Category|null

}