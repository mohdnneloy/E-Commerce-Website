import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import md5 from 'blueimp-md5'

// Components ===========================
import Footer from '../Components/Footer'
import Header from '../Components/Header'

// Styles =================================
import './Styles/register.css'

const Login = () => {

  // States =========================================
  const [phone_number,setPhoneNumber] = useState();
  const [password,setPassword] = useState();
  var customers = [];

  // Base URLS ====================================
  const localhostb = "https://ecommerce-website-json.onrender.com";
  const localhostf = "https://e-commerce-website-delta-eight.vercel.app";

  // Login Function On Submit
  const login = (event) =>{

    event.preventDefault();

    axios.get(localhostb.concat("/customers"))
    
        .then(res=>{
            customers = res.data;
            console.log(customers);

            // Authenticating User
            customers.map(customer => {
                console.log(customer.customer_password);
                if(customer.customer_phone_number == phone_number && customer.customer_password == md5(password)){
                    localStorage.setItem('customer_phone_number', phone_number)
                    window.location = localhostf;
                }
        
                else{
                    alert("User Not Found OR Password Did not match!");
                    return false;
                }
            })
        })
        .catch(error=>{
            console.log(error);
        })

    
  }

  return (
    <>
        <Header/>
        <div className="main">
            <form onSubmit={login}>
                <h1>Login</h1>
                <div class="mb-3">
                    <label for="phone-number" className="form-label">Phone Number</label>
                    <input type="tel" pattern="01[0-9]{9}" placeholder='01*********' className="form-control" id="phone-number" onChange={e => {setPhoneNumber(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" onChange={e => {setPassword(e.target.value)}}/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    </>
  )
}

export default Login