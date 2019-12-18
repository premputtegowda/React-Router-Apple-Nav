import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import data from './data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

// import NavWrapper from "./components/NavWrapper";
// import SubNav from "./components/SubNav";
//
import Home from "./components/Home";
import { Route, NavLink } from "react-router-dom";
import Mac from './components/Mac'


import styled from "styled-components";



const NavMenu = styled.nav`
display:flex;
padding:5px;

justify-content: space-around;
width: 100%;
color: white;


`



function App() {
  const [menuItems] = useState(data)
  
  
  return (

    <div className="App">
      <header className="App-header">
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
        
      </header>
      <Route exact path="/">
         <Home />
      </Route>
      <Route path="/mac">
         <Mac items = {menuItems}/>
      </Route>
      
    </div>
  );
}

export default App;
