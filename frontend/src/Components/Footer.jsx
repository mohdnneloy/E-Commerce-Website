import React from 'react'
import { NavLink } from 'react-router-dom';

// Styles ==============================
import './Styles/footer.css'

const Footer = () => {

  var localhost = "https://e-commerce-website-delta-eight.vercel.app";
  return (
    <>
        <footer>
            <div className="footer-div">
                © 2023 Copyright:
                <NavLink to={localhost}> Spacio.com</NavLink>
            </div>
        </footer>
    </>
  )
}

export default Footer