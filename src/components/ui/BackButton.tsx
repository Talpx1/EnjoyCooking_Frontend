import { ButtonHTMLAttributes } from "react";
import Button from './Button';
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi';

export default function BackButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    const {type, onClick, ...rest} = props; 
    const navigate = useNavigate();

    return (
        <Button type='button' onClick={()=>{navigate(-1);}} {...rest}>
            {props.children || (
                <div className='flex items-center gap-1'>
                    <BiArrowBack /> Back
                </div>
            )}
        </Button>
    );
};
