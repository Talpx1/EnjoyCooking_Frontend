import { useLoaderData } from 'react-router-dom';
import FormInput from '../../../components/form/FormInput';
import { Award } from '../../../types/award_types';
import Button from '../../../components/ui/Button';
import FormErrorsProvider from '../../../contexts/FormErrorsContext';
import Form from '../../../components/form/Form';
import FormImageInput from '../../../components/form/FormImageInput';

export default function AwardsCreate() {
    const award: Award = useLoaderData() as Award;
    const isEdit: boolean = award!==undefined;

    return (
        <>
            {isEdit ? <h1>Edit Award</h1> : <h1>Create Award</h1>}
            <Form method='post' encType='multipart/form-data'>
                <FormInput name='name' type='text' label='Name' defaultValue={isEdit ? award.name : ''}/>
                <FormInput name='price' type='number' min={0} label='Price' defaultValue={isEdit ? (award?.price ?? 0)  : ''} step={.01}/>
                <FormImageInput name='icon' type='file' label='Icon' fileUrl={isEdit ? `${import.meta.env.EC_CORE_URL}/storage${award.icon_path}.png` : ''}/>
                <Button type='submit'>Submit</Button>
            </Form>
        </>
    );
};
