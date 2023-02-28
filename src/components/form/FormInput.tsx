import { InputHTMLAttributes } from "react"
import useFormInputErrors from '../../hooks/useFormInputErrors';

export type FormInput = {
    label?: string
    errors?: object|null
}

export default function FormInput(props: FormInput & InputHTMLAttributes<HTMLInputElement>) {

    const newProps = !props.id ? {...props, id: props.name} : props;
    const {label, ...rest} = newProps;

    const errors = useFormInputErrors(newProps.name);

    return (
        <>
            {props.label && <label htmlFor={newProps.name} className="block">{newProps.label}</label>}
            <input {...rest} />

            {errors && ( 
                <p>
                    {errors}
                </p>
            )}

        </>
    );
};
