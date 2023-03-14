import React from "react";
import {NavLinkProps, NavLink as ReactRouterNavLink} from 'react-router-dom'

function NavLink(props: NavLinkProps & {icon?: React.ReactElement}, ref: any) {
    const {className, icon, ...rest} = props;

    const baseClasses = `p-3 rounded-xl text-ec-base-light hover:text-ec-accent-dark duration-300 flex items-center gap-x-1`; 
    const activeClasses = `${baseClasses} bg-ec-accent-medium`;
    const pendingClasses = `${baseClasses} bg-ec-accent-light text-ec-gray-medium`;

    return (
        <ReactRouterNavLink {...rest} ref={ref} className={({ isActive, isPending }) =>isActive ? activeClasses : isPending ? pendingClasses : baseClasses}>
            {icon??''}
            {props.children}
        </ReactRouterNavLink>
    )
};

export default React.forwardRef(NavLink);