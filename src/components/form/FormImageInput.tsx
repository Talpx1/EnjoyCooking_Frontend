import { InputHTMLAttributes, useState } from 'react';
import FormInput, { FormInput as FormInputType } from './FormInput';

type FormImageInput = FormInputType & InputHTMLAttributes<HTMLInputElement> & {fileUrl:string}

export default function FormImageInput(props: FormImageInput) {

    const {type, onChange, fileUrl, ...rest} = props;

    const [file, setFile] = useState(fileUrl);

    function handleChange(event) {
        console.log('new')
        const newFile = event.target.files[0];
        setFile(URL.createObjectURL(newFile));
    }

    return (
        <>
            {file && <img src={file}/>}
            <FormInput type='file' onChange={handleChange} {...rest} />
        </>
    );
};
