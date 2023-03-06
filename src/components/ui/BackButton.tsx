import { ButtonHTMLAttributes } from "react";
import Button from './Button';
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi';
import { useTranslation } from "react-i18next";

export default function BackButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    const {type, onClick, ...rest} = props; 
    const navigate = useNavigate();
    const {t} = useTranslation();

    return (
        <Button type='button' onClick={()=>{navigate(-1);}} {...rest}>
            {props.children || (
                <div className='flex items-center gap-1'>
                    <BiArrowBack /> {t('back')}
                </div>
            )}
        </Button>
    );
};
