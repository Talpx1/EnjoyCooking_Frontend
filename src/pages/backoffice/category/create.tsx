import { useLoaderData } from 'react-router-dom';
import FormInput from '../../../components/form/FormInput';
import Button from '../../../components/ui/buttons/Button';
import Form from '../../../components/form/Form';
import BackButton from '../../../components/ui/buttons/BackButton';
import PageTitle from '../../../components/ui/backoffice/PageTitle';
import { useTranslation } from 'react-i18next';
import { useChangeTitle } from '../../../hooks/useChangeTitle';
import { Category } from '../../../types/category_types';
import PageStateDetector from '../../../components/ui/backoffice/PageStateDetector';
import FormSelect from '../../../components/form/FormSelect';
import { filteredCategoriesLoader } from '../../../services/core/loaders/category';

export default function CategoryCreate() {
    const category: Category = useLoaderData() as Category;
    const isEdit: boolean = category!==undefined;
    const {t} = useTranslation();
    const pageTitle = isEdit ? `${t('edit_category')} "${category.name}"` : t('create_category');
    
    useChangeTitle(pageTitle);
    
    return (
        <PageStateDetector>
            <BackButton />

            <PageTitle>{pageTitle}</PageTitle>
            <Form method='post' encType='multipart/form-data'>
                <FormInput name='name' type='text' label={t('name')} defaultValue={isEdit ? category.name : ''} required={true}/>
                <FormSelect 
                    isSearchable
                    name='parent_category_id' 
                    label={t('parent_category')} 
                    required={false} 
                    defaultValue={isEdit ? category?.parent_category_id??null : null} 
                    defaultOptions={true} 
                    loadOptions={filteredCategoriesLoader}
                />
                <Button type='submit' className='mt-5 block'>{t('save_category')}</Button>
            </Form>
        </PageStateDetector>
    );
};
