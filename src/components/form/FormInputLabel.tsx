import { LabelHTMLAttributes } from "react";

export default function FormInputLabel(props: LabelHTMLAttributes<HTMLLabelElement>) {
    if(!props.hasOwnProperty('children') || props?.children===undefined || props?.children===null) return null;
    return (
        <label htmlFor={props.htmlFor} className={`${props.className} block ml-1 mb-1`}>{props.children}</label>
    );
};
