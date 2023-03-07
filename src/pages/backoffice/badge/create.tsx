import { useLoaderData } from 'react-router-dom';
import FormInput from '../../../components/form/FormInput';
import Button from '../../../components/ui/buttons/Button';
import Form from '../../../components/form/Form';
import BackButton from '../../../components/ui/buttons/BackButton';
import PageTitle from '../../../components/ui/backoffice/PageTitle';
import { useTranslation } from 'react-i18next';
import { useChangeTitle } from '../../../hooks/useChangeTitle';
import { Badge } from '../../../types/badge_types';
import PageStateDetector from '../../../components/ui/backoffice/PageStateDetector';
import FormTextArea from '../../../components/form/FormTextArea';

export default function BadgeCreate() {
    const badge: Badge = useLoaderData() as Badge;
    const isEdit: boolean = badge!==undefined;
    const {t} = useTranslation();
    const pageTitle = isEdit ? `${t('edit_badge')} "${badge.title}"` : t('create_badge');
    
    useChangeTitle(pageTitle);
    
    return (
        <PageStateDetector>
            <BackButton />

            <PageTitle>{pageTitle}</PageTitle>
            <Form method='post' encType='multipart/form-data'>
                <FormInput name='title' type='text' label={t('title')} defaultValue={isEdit ? badge.title : ''} required={true}/>
                <FormTextArea name='description' label={t('description')} defaultValue={isEdit ? badge?.description : ''} required={false}/>
                <Button type='submit' className='mt-5 block'>{t('save_badge')}</Button>
            </Form>
        </PageStateDetector>
    );
};
