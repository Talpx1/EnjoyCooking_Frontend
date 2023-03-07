import React, { TextareaHTMLAttributes } from "react"
import useFormInputErrors from '../../hooks/useFormInputErrors';

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
            {props.label && <label htmlFor={newProps.name} className="block">{newProps.label}</label>}
            <textarea 
                className={`
                    ${className??''}
                    p-2 rounded-xl text-ec-gray-dark
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
