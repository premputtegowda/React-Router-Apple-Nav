import React from "react";
import { Link } from "react-router-dom";
import SubNav from './subMenu/SubNav';
import styled from "styled-components";

const NavMenu = styled.nav`
display:flex;
padding:5px;
justify-content: space-around;
width: 100%;
color: white;
`



function Mac({items}){
    //const item = useParams()
    //console.log(item)
   
    
    return (

        <div> 

            <div className="sub-menu">
              <NavMenu>
              {items.map((item, index) =>
                   (<SubNav item={item} key={index}/>)
               )}
              </NavMenu>
              </div> 
               
       
            {/* <div className="sub-menu">
                <Link to="/macbook-air">Macbook air</Link>
                <Link to="/macbook-pro-13">Macbook 13</Link>
                <Link to="/macbook-pro-16">Macbook 16</Link>
            </div> */}

           

            <div>
             <h1>Mac Content goes here!!</h1>
            </div>
           
        </div>
    )
}

export default Mac;