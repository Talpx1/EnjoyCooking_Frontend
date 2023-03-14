import { useLoaderData } from 'react-router-dom';
import FormInput from '../../../components/form/FormInput';
import Button from '../../../components/ui/buttons/Button';
import Form from '../../../components/form/Form';
import BackButton from '../../../components/ui/buttons/BackButton';
import PageTitle from '../../../components/ui/backoffice/PageTitle';
import { useTranslation } from 'react-i18next';
import { useChangeTitle } from '../../../hooks/useChangeTitle';
import PageStateDetector from '../../../components/ui/backoffice/PageStateDetector';
import { Course } from '../../../types/course_types';

export default function CourseCreate() {
    const course: Course = useLoaderData() as Course;
    const isEdit: boolean = course!==undefined;
    const {t} = useTranslation();
    const pageTitle = isEdit ? `${t('edit_course')} "${course.name}"` : t('create_course');
    
    useChangeTitle(pageTitle);
    
    return (
        <PageStateDetector>
            <BackButton />

            <PageTitle>{pageTitle}</PageTitle>

            <Form method='post' encType='multipart/form-data' >
                <div className='flex gap-5'>
                    <div><FormInput name='title' type='text' label={t('name')} defaultValue={isEdit ? course.name : ''} required={true}/></div>  
                    {isEdit && <div><FormInput type='text' label={t('slug')} defaultValue={course.slug} disabled={true} readOnly={true}/></div>}         
                </div>
                <Button type='submit' className='mt-5 block'>{t('save_course')}</Button>
            </Form>
        </PageStateDetector>
    );
};
