import { PropsWithChildren } from "react";

export default function Description(props: PropsWithChildren & {maxLength: number, suffix?: string}) {
    
    if(!props?.children) return <p></p>;

    if(typeof props.children !== 'string') {
        console.warn(`The Description component only accepts string children. Detected: ${typeof props.children}. An empty <p> tag will be rendered.`)
        return <p></p>;
    }


    const text = props.children.length > props.maxLength ? `${props.children.substring(0, props.maxLength)}${props?.suffix || '...'}` : props.children;

    const {maxLength, ...rest} = props;

    return (
        <p {...rest}>{text}</p>
    )
};
