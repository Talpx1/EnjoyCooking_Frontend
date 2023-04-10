import { useLoaderData } from 'react-router-dom';
import FormInput from '../../../components/form/FormInput';
import Button from '../../../components/ui/buttons/Button';
import Form from '../../../components/form/Form';
import BackButton from '../../../components/ui/buttons/BackButton';
import PageTitle from '../../../components/ui/backoffice/PageTitle';
import { useTranslation } from 'react-i18next';
import { useChangeTitle } from '../../../hooks/useChangeTitle';
import PageStateDetector from '../../../components/ui/backoffice/PageStateDetector';
import { Gender } from '../../../types/gender_types';

export default function GenderCreate() {
    const gender: Gender = useLoaderData() as Gender;
    const isEdit: boolean = gender!==undefined;
    const {t} = useTranslation();
    const pageTitle = isEdit ? `${t('edit_gender')} "${gender.name}"` : t('create_gender');
    
    useChangeTitle(pageTitle);
    
    return (
        <PageStateDetector>
            <BackButton />

            <PageTitle>{pageTitle}</PageTitle>

            <Form method='post' encType='multipart/form-data' >
                <div className='flex gap-5'>
                    <div><FormInput name='name' type='text' label={t('name')} defaultValue={isEdit ? gender.name : ''} required={true}/></div>  
                </div>
                <Button type='submit' className='mt-5 block'>{t('save_gender')}</Button>
            </Form>
        </PageStateDetector>
    );
};
