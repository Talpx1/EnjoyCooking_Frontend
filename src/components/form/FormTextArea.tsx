import React, { TextareaHTMLAttributes } from "react"
import useFormInputErrors from '../../hooks/useFormInputErrors';
import FormInputLabel from './FormInputLabel';

export type FormTextArea = {
    label?: string
    errors?: object|null
}

function FormTextArea(props: FormTextArea & TextareaHTMLAttributes<HTMLTextAreaElement>, ref) {

    const newProps = !props.id ? {...props, id: props.name} : props;
    const {label, className, ...rest} = newProps;

    const errors = useFormInputErrors(newProps.name);

    return (
        <>
            <FormInputLabel htmlFor={newProps.name}>{newProps.label}</FormInputLabel>
            <textarea 
                className={`
                    ${className??''}
                    p-2 rounded-xl text-ec-gray-dark w-full h-40 max-h-80
                    disabled:cursor-not-allowed disabled:bg-ec-gray-light disabled:text-ec-gray-medium
                `} 
                ref={ref}
                {...rest}
            >
            </textarea>

            {errors && ( 
                <p>
                    {errors}
                </p>
            )}

        </>
    );
};

export default React.forwardRef(FormTextArea);
