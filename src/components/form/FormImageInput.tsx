import { InputHTMLAttributes, useRef, useState } from 'react';
import FormInput, { FormInput as FormInputType } from './FormInput';
import Button from '../ui/Button';

type FormImageInput = FormInputType & InputHTMLAttributes<HTMLInputElement> & {fileUrl:string, buttonText:string}

export default function FormImageInput(props: FormImageInput) {

    const {type, onChange, fileUrl, buttonText, label, ...rest} = props;

    const [file, setFile] = useState(fileUrl);

    const formInputRef = useRef();

    function handleChange(event) {
        const newFile = event.target.files[0];
        setFile(URL.createObjectURL(newFile));
    }

    return (
        <div>
            <label htmlFor={props?.id ?? props.name}>{label}</label>
            <div className="flex gap-2">
                {file && <img className='max-h-14' src={file}/>}
                <Button type='button' onClick={()=>formInputRef.current.click()}>{buttonText}</Button>
            </div>
            <FormInput ref={formInputRef} type='file' onChange={handleChange} {...rest} hidden={true}/>
        </div>
    );
};
