import React from "react";


function NavWrapper(){

    return (
        <NavMenu>
            <NavLink to="/">Apple</NavLink>
            <NavLink to="/mac">Mac</NavLink>
            <NavLink to="/ipad">iPad</NavLink>
            <NavLink to="/iphone">iPhone</NavLink>
            <NavLink to="/watch">Watch</NavLink>
            <NavLink to="/tv">TV</NavLink>
            <NavLink to="/music">Music</NavLink>
            <NavLink to="/support">Support</NavLink>
            <NavLink to="/"><FontAwesomeIcon icon={faSearch} /></NavLink>
            <NavLink to="/"><FontAwesomeIcon icon={faShoppingBag} /></NavLink>
            
            
        </NavMenu>
    )
}

export default NavWrapper;