import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// Styles ======================================
import './Styles/header.css'


const Header = () => {

  // Local Host URLs =============================
  const localhostf = "https://e-commerce-website-delta-eight.vercel.app/";
  
  // LocalStorage Values ===============================
  const [user, setUser] = useState("");

  useEffect(()=>{
		setUser(localStorage.getItem('customer_phone_number'));
	}, [])
  

  // Logout User ==================================
  const logout = () => {
    localStorage.setItem('customer_phone_number', "");
    setUser("");
    console.log(localStorage.getItem('customer_phone_number'));
    window.location = localhostf.concat("/login");
  }
  return (

    <>  
        <header className="home-header">
          <div className="container">
            <nav className=" navbar navbar navbar-expand-lg">
              <div className="container-fluid">
              <NavLink  className="navbar-brand" to={localhostf}>Spacio</NavLink >
                <div className="navbar-nav">
                  <NavLink  className="nav-link" to={localhostf}>Home</NavLink >
                  <NavLink className="nav-link" to={"/products"}>Products</NavLink >
                  {user == "" && <NavLink  className="nav-link" to={"/login"}>Login</NavLink >}
                  {user == "" && <NavLink  className="nav-link" to={"/register"}>Register</NavLink >}
                  {user != "" && <NavLink  className="nav-link" onClick={logout}>Logout</NavLink >}
                </div>
              </div>
            </nav>
          </div>
        </header>
    </>
    
    
    
  )
}

export default Header