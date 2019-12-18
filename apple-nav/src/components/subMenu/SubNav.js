import React from "react";

import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import ReactHtmlParser from "react-html-parser"


function SubNav({item}){
   
    const path = `/${item.path}`;
 
  
   
    return (
        
       
         <Link to={path}>{item.icon}</Link>
          
            
       

    )

}

export default SubNav;