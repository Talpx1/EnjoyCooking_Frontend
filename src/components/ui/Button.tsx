import { ButtonHTMLAttributes, MouseEventHandler } from "react";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    
    const {className: _, ...rest} = props;
    
    return (
        <button 
            className="bg-ec-brick text-ec-light p-2 rounded-xl"
            {...rest}
        >
            {props.children}
        </button>
    );
};