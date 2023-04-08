import { useLoaderData } from 'react-router-dom';
import FormInput from '../../../components/form/FormInput';
import Button from '../../../components/ui/buttons/Button';
import Form from '../../../components/form/Form';
import BackButton from '../../../components/ui/buttons/BackButton';
import PageTitle from '../../../components/ui/backoffice/PageTitle';
import { useTranslation } from 'react-i18next';
import { useChangeTitle } from '../../../hooks/useChangeTitle';
import PageStateDetector from '../../../components/ui/backoffice/PageStateDetector';
import { DifficultyLevel } from '../../../types/difficulty_level_types';

export default function DifficultyLevelCreate() {
    const difficulty_level: DifficultyLevel = useLoaderData() as DifficultyLevel;
    const isEdit: boolean = difficulty_level!==undefined;
    const {t} = useTranslation();
    const pageTitle = isEdit ? `${t('edit_difficulty_level')} "${difficulty_level.name}"` : t('create_difficulty_level');
    
    useChangeTitle(pageTitle);
    
    return (
        <PageStateDetector>
            <BackButton />

            <PageTitle>{pageTitle}</PageTitle>

            <Form method='post' encType='multipart/form-data' >
                <div className='flex gap-5'>
                    <div><FormInput name='name' type='text' label={t('name')} defaultValue={isEdit ? difficulty_level.name : ''} required={true}/></div>  
                    {isEdit && <div><FormInput type='text' label={t('slug')} defaultValue={difficulty_level.slug} disabled={true} readOnly={true}/></div>}         
                </div>
                <Button type='submit' className='mt-5 block'>{t('save_difficulty_level')}</Button>
            </Form>
        </PageStateDetector>
    );
};
