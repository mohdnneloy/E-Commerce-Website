import React from 'react'
import { NavLink } from 'react-router-dom';

// Styles  
import './Styles/header.css'



const Header = () => {

  var localhost = "http://localhost:3000/";
  return (

    <>  
        <header className="home-header">
          <div className="container">
            <nav className=" navbar navbar navbar-expand-lg">
              <div className="container-fluid">
              <NavLink  className="navbar-brand" to={localhost}>Spacio</NavLink >
                <div className="navbar-nav">
                  <NavLink  className="nav-link" to={localhost}>Home</NavLink >
                  <NavLink className="nav-link" to={"/products"}>Products</NavLink >
                  <NavLink  className="nav-link" to={"/login"}>Login</NavLink >
                  <NavLink  className="nav-link" to={"/register"}>Register</NavLink >
                </div>
              </div>
            </nav>
          </div>
        </header>
    </>
    
    
    
  )
}

export default Header