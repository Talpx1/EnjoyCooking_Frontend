import React from "react";

export default function MessageBox({type, icon, children, className}: {type:'success'|'warn'|'error'|'info', icon?:React.ReactElement, children:any, className:string}) {
    
    function classes(){
        switch(type){
            default:
            case 'info': return 'bg-ec-gray-light text-ec-gray-dark';
            case 'warn': return 'bg-yellow-300 text-ec-accent-dark';
            case 'error': return 'bg-red-500 text-ec-gray-light';
            case 'success': return 'bg-lime-400 text-ec-gary-dark';
        }
    }

    return(
        <div className={`${classes()} ${className} flex gap-5 p-5 rounded-xl items-center`}>
            {icon && <div>{icon}</div>}
            <p>{children}</p>
        </div>
    )
};
