import { MouseEventHandler } from "react";

export default function Button({type='submit', children, onClick=undefined}: {type?: 'submit' | 'reset' | 'button', children: any, onClick?: MouseEventHandler<HTMLButtonElement>}) {
    return (
        <button 
            type={type}
            className="bg-ec-brick text-ec-light p-2 rounded-xl"
            onClick={onClick}
        >
            {children}
        </button>
    );
};
