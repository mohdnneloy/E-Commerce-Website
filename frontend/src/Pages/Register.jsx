import React, { useEffect, useState } from 'react'
import axios from 'axios'
import md5 from 'blueimp-md5'

// Components ===========================
import Footer from '../Components/Footer'
import Header from '../Components/Header'

//Styles ================================
import './Styles/register.css'

const Register = () => {

  const [phone_number,setPhoneNumber] = useState();
  const [password,setPassword] = useState();
  const localhostb = "https://vercel.com/mohdnneloy/e-commerce-website";
  const localhostf = "https://e-commerce-website-delta-eight.vercel.app";

  const register = (event) =>{

    event.preventDefault();

    var customer = {
        customer_phone_number: phone_number,
        customer_password: md5(password)
    }
    axios.post(localhostb.concat("/customers"), customer)
    
        .then(res=>{
            console.log(res);
            window.location = localhostf.concat("/login");
        })
        .catch(error=>{
            console.log(error);
            return false;
        })
  }

  return (
    <>
        <Header/>
        <div className="main">
            <form onSubmit={register}>
                <h1>Register</h1>
                <div class="mb-3">
                    <label for="phone-number" className="form-label">Phone Number</label>
                    <input type="tel" pattern="01[0-9]{9}" placeholder='01*********' className="form-control" id="phone-number" onChange={e => {setPhoneNumber(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" onChange={e => {setPassword(e.target.value)}}/>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>

    </>
  )
}

export default Register