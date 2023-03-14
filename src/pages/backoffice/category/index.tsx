import { useLoaderData, Link } from 'react-router-dom';
import Button from '../../../components/ui/buttons/Button';
import { PaginatedData } from '../../../types/core_types';
import PageTitle from '../../../components/ui/backoffice/PageTitle';
import { useTranslation } from 'react-i18next';
import { useChangeTitle } from '../../../hooks/useChangeTitle';
import PageStateDetector from '../../../components/ui/backoffice/PageStateDetector';
import { Category } from '../../../types/category_types';
import Paginator from '../../../components/ui/pagination/Paginator';
import { FaEdit, FaTrash } from 'react-icons/fa';
import DeleteButton from '../../../components/ui/buttons/DeleteButton';
import { useEffect, useReducer, useRef, useState } from 'react';
import { getSubcategories } from '../../../services/core/loaders/category';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import useSessionCache from '../../../hooks/useSessionCache';

export default function CategoriesIndex() {
    const { t } = useTranslation();
    const categories: PaginatedData<Category> = useLoaderData() as PaginatedData<Category>;
    const prevPageRef = useRef(categories.current_page);
    const [state, dispatch]: [Category[], Function] = useReducer(reducer, categories.data);
    
    useChangeTitle(t('categories'));   

    useEffect(() => {
        if (prevPageRef.current !== categories.current_page) {
            dispatch({ type: ACTIONS.RELOAD_STATE, payload: { state: categories.data } });
        }
        prevPageRef.current = categories.current_page;
    }, [categories.current_page]);

    return (
        <PageStateDetector>
            <Link to="create"><Button type="button">{t('add_category')}</Button></Link>
            <PageTitle>{t('categories')}</PageTitle>

                <div className="flex flex-col gap-y-5">
                    {state.map((category: Category) => <CategoryRow key={category.id} category={category} dispatch={dispatch} />)}
                </div>

            <Paginator paginatedData={categories} className='mt-8'></Paginator>
            
        </PageStateDetector>
    );
    
}

function CategoryRow({category, dispatch}: {category: Category, dispatch: Function}){
    const { t } = useTranslation();
    const [expanded, setExpanded] = useState(false);
    const [loading, setLoading] = useState(false);

    async function asyncDispatch(action:any){
        switch(action.type){
            case ACTIONS.LOAD_SUBCATEGORIES:
                const hasSubcategories = action.payload.category?.subcategories ?? false;
                const isLoadMore = action.payload?.isLoadMore ?? false;
                if(hasSubcategories && !isLoadMore) return;
                setLoading(true)
                const page = isLoadMore ? (action.payload.category.subcategories.current_page + 1) : 1;
                action.payload.subcategories = await getSubcategories(action.payload.category.id, page);     
                dispatch(action);
                setLoading(false);
                break;
        }
    }

    return (
        <div className={`flex justify-between ${expanded && 'border-ec-base-medium border-l-2 pl-1'}`} key={category.id}>
            <div className='flex-auto'>
                {/* name and expand */}
                <div className="flex items-center gap-1" onClick={async () => {
                    setExpanded(expanded=>!expanded);
                    await asyncDispatch({type:ACTIONS.LOAD_SUBCATEGORIES, payload:{category:category}});
                }}>
                    <Button id={`load_subcategories_${category.id}`} value={category.id} type='button'> {expanded ? <IoIosArrowDown /> : <IoIosArrowForward />} </Button>
                    <div className='cursor-pointer'>{category.name}</div>
                </div>
                {/* subcategories list */}
                <div className='ml-5' hidden={!expanded}>                
                    {
                        loading ? (<div>{t('loading')}</div>) :
                        (category?.subcategories?.data?.length??false) ? (                        
                            category.subcategories.data.map((subcategory: Category)=>(
                                <div className='border-ec-accent-medium border-2 p-2 my-2 rounded-xl' key={subcategory.id}>
                                    <CategoryRow category={subcategory} dispatch={dispatch} />
                                </div>
                            )) 
                        ) : t('no_subcategories', {name: category.name})
                    }
                    {
                        (category.load_more && (category?.subcategories??false)) && (
                            <Button onClick={
                                async() => await asyncDispatch({
                                    type: ACTIONS.LOAD_SUBCATEGORIES,
                                    payload:{category: category, isLoadMore: true}
                                },dispatch)}>{t('load_more')}</Button>
                        )
                    }
                </div>
            </div>
            {/* actions */}
            <div className="flex gap-1">
                <Link to={`${category.id}/edit`}><Button type='button' title={t('edit')}><FaEdit /></Button></Link>
                <DeleteButton entityId={category.id} confirmText={t(`category_confirm_delete`, { name: category.name })} title={t('delete')}><FaTrash /></DeleteButton>
            </div>
        </div>
    );
}


const ACTIONS = {
    LOAD_SUBCATEGORIES: 'load_subcategories',
    RELOAD_STATE: 'reload_state',
}

function reducer(state, action){
    switch(action.type){
        case ACTIONS.RELOAD_STATE: return action.payload.state;
        case ACTIONS.LOAD_SUBCATEGORIES:{
            const subcategories = action.payload.subcategories;
            const category_id = action.payload.category.id;
            return state.map(category => recursivelyFindCategoryAndAddSubcategories(category, category_id, subcategories))
        }
    }
}

function recursivelyFindCategoryAndAddSubcategories(category: Category, category_id: number, subcategories: object): object{
    if(category.id === category_id) return {...category, subcategories:{...subcategories, data:[...category?.subcategories?.data??[], ...subcategories.data]}, load_more: subcategories.current_page !== subcategories.last_page};
    if(category?.subcategories??false) return {...category, subcategories:{...subcategories, data:[...category.subcategories.data.map((subcategory)=>recursivelyFindCategoryAndAddSubcategories(subcategory, category_id, subcategories))]}};
    return category;
}