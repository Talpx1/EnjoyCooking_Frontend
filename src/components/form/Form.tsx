import { FormProps } from 'react-router-dom';
import FormErrorsProvider from '../../contexts/FormErrorsContext';
import { Form as ReactRouterForm}  from 'react-router-dom';

export default function Form(props: FormProps){
    
    return(
        <ReactRouterForm {...props}>
            <FormErrorsProvider>
                {props.children}
            </FormErrorsProvider>
        </ReactRouterForm>
    )

};
