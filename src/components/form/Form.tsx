import { FormProps, useFetcher } from 'react-router-dom';
import FormErrorsProvider from '../../contexts/FormErrorsContext';
import { Form as ReactRouterForm}  from 'react-router-dom';

export default function Form(props: FormProps & {isFetcher?: boolean}){
    const {isFetcher = false, ...rest} = props;
    
    if(isFetcher){
        const fetcher = useFetcher();
        return (
            <fetcher.Form {...rest}>
                <FormErrorsProvider>
                    {props.children}
                </FormErrorsProvider>
            </fetcher.Form>
        )
    }

    return (
        <ReactRouterForm {...rest}>
            <FormErrorsProvider>
                {props.children}
            </FormErrorsProvider>
        </ReactRouterForm>
    )

};