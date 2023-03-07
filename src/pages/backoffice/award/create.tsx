import { useLoaderData, useNavigation } from 'react-router-dom';
import FormInput from '../../../components/form/FormInput';
import { Award } from '../../../types/award_types';
import Button from '../../../components/ui/buttons/Button';
import Form from '../../../components/form/Form';
import FormImageInput from '../../../components/form/FormImageInput';
import BackButton from '../../../components/ui/buttons/BackButton';
import PageTitle from '../../../components/ui/backoffice/PageTitle';
import { useTranslation } from 'react-i18next';
import { useChangeTitle } from '../../../hooks/useChangeTitle';

export default function AwardsCreate() {
    const award: Award = useLoaderData() as Award;
    const isEdit: boolean = award!==undefined;
    const {t} = useTranslation();
    const pageTitle = isEdit ? `${t('edit_award')} "${award.name}"` : t('create_award');
    const navigation = useNavigation();
    
    useChangeTitle(pageTitle);
    
    return (
        <div className={navigation.state !== "idle" ? "opacity-50 grayscale" : ""}>
            <BackButton />

            <PageTitle>{pageTitle}</PageTitle>
            <Form method='post' encType='multipart/form-data'>
                <FormInput name='name' type='text' label={t('name')} defaultValue={isEdit ? award.name : ''}/>
                <FormInput name='price' type='number' min={0} label={t('price')} defaultValue={isEdit ? (award?.price ?? 0)  : ''} step={.01}/>
                <FormImageInput name='icon' type='file' label={t('icon')} buttonText={t('upload_icon')} fileUrl={isEdit ? `${import.meta.env.EC_CORE_URL}/storage${award.icon_path}.png` : ''}/>
                <Button type='submit' className='mt-5'>{t('save_award')}</Button>
            </Form>
        </div>
    );
};
