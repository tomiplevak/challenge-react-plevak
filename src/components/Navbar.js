import React  from "react";

import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function NavLinks(){
    return (
        <nav className="nav">
            <Link to="/" className="home">Home</Link>
            <ul>
                <CustomLink  to="/table">Table</CustomLink>
                <CustomLink  to="/form">Form</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return(
        <li className={isActive ? "active links" : "links"}>
            <Link to={to} {... props}>{children}</Link>
        </li>
    )
}

export default NavLinks; 