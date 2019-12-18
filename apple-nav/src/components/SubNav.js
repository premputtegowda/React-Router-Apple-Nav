import React from "react";


function SubNav({item}){
    console.log(item)
    return (

       <div>
           <Link to={`${item.path}`}>{`${item.icon}`}</Link> 
       </div>
            
        
    )
}

export default SubNav;