import React, { InputHTMLAttributes } from "react"
import useFormInputErrors from '../../hooks/useFormInputErrors';
import FormInputLabel from './FormInputLabel';

export type FormInput = {
    label?: string
    errors?: object|null
}

function FormInput(props: FormInput & InputHTMLAttributes<HTMLInputElement>, ref) {

    const newProps = !props.id ? {...props, id: props.name} : props;
    const {label, className, ...rest} = newProps;

    const errors = useFormInputErrors(newProps.name);

    return (
        <>
            <FormInputLabel htmlFor={newProps.name}>{newProps.label}</FormInputLabel>
            <input 
                className={`
                    ${className??''}
                    p-2 rounded-xl text-ec-gray-dark
                    disabled:cursor-not-allowed disabled:bg-ec-gray-light disabled:text-ec-gray-medium
                `} 
                ref={ref}
                {...rest}
            />

            {errors && ( 
                <p>
                    {errors}
                </p>
            )}

        </>
    );
};

export default React.forwardRef(FormInput);
