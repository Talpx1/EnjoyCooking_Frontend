import { ButtonHTMLAttributes } from "react";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {

    const { className, ...rest } = props;

    return (
        <button
            className={`
                ${className??''}
                text-ec-base-light bg-ec-base-medium p-2 rounded-xl duration-300 text-center
                hover:bg-ec-accent-medium
                disabled:text-ec-gray-dark disabled:bg-ec-gray-light disabled:cursor-not-allowed
            `}
            {...rest}
        >
            {props.children}
        </button>
    );
};