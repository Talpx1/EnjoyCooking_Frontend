import { useContext } from 'react';
import { FormErrorsContext } from '../contexts/FormErrorsContext';

export default function useFormInputErrors(inputName: string): string[] | null {
    const errors = useContext(FormErrorsContext);
    if(!errors) return null;

    if(errors[inputName]) return errors[inputName];
    return null; 
};
