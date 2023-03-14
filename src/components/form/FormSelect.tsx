import React from 'react';
import { GroupBase, Options, Props } from 'react-select';
import AsyncSelect, { AsyncProps } from 'react-select/async';
import useFormInputErrors from '../../hooks/useFormInputErrors';
import { useTranslation } from 'react-i18next';
import FormInputLabel from './FormInputLabel';

type FormSelect<Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>> = AsyncProps<Option, IsMulti, Group> & {label: string}

function FormSelect<Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props: FormSelect<Option, IsMulti, Group>, ref) {

    const newProps = !props.id ? {...props, id: props.name} : props;
    const {label, className, ...rest} = newProps;

    const errors = useFormInputErrors(newProps.name);

    const {t} = useTranslation();

    return (
        <>
            <FormInputLabel htmlFor={newProps.name}>{newProps.label}</FormInputLabel>
            <AsyncSelect
                unstyled
                cacheOptions
                placeholder={<span className='text-ec-gray-medium'>{t('insert_3_char_to_search')}</span>}
                noOptionsMessage={()=><span className='text-ec-gray-medium'>{t('no_results')}</span> }
                loadingMessage={()=><span className='text-ec-gray-medium'>{t('loading')}</span>}
                ref={ref} 
                classNames={{
                    container: (state) =>{
                        const always = `${className} px-2 rounded-xl`;
                        if(state.isDisabled) return `${always} cursor-not-allowed bg-ec-gray-light text-ec-gray-medium`;
                        return `${always} text-ec-gray-dark bg-white`;
                    },
                    menu: (state) => `p-2 text-ec-gray-dark bg-white rounded-xl left-0 mt-2`,
                    option: (state) => `p-2 rounded-xl ${state.isSelected ? 'bg-ec-accent-medium' : ''} ${state.isFocused ? 'bg-ec-accent-light' : ''}`
                }} 
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

export default React.forwardRef(FormSelect);