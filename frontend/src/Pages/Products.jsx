import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Header from '../Components/Header';

// Styles ===============================
import './Styles/products.css';
import { CircularProgress } from '@mui/material';
import Footer from '../Components/Footer';
import { NavLink } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const Products = () => {

    // Localhost URLS ================================
    const localhostf = "https://e-commerce-website-delta-eight.vercel.app";
    const localhostb = "https://ecommerce-website-json.onrender.com";

    // Other ===========================================
    const [pending, setPending] = useState(0);
    const [products, setProducts] = useState([]);
    const [dproduct, setDproduct] = useState([]);
    const[check,setCheck] = useState(0);

    useEffect(() => {

    // Obtaining Product Details from JSON File running on port 8000
    // Activate JSON Server with this terminal command "npx json-server --watch data/db.json --port 8000"
    const getProducts = () =>{
        axios.get(localhostb.concat("/products"))
    
        .then(res=>{
        
        
        setProducts(res.data);
        console.log(products);
        
        // Load Page After 2 Seconds
        const timer = setTimeout(() => {
            setPending(1);
          }, 2000);
          return () => clearTimeout(timer);
        
        
        })
        .catch(error=>{
            console.log(error);
        })
    }

    getProducts();
        
    }, []);


    // Props Ready
    const productDetails = (product) => {
        setDproduct(product)
        setCheck(1);
    }
    
    

    return (
        
        <>            
            { // If data is not retrieved yet
                pending == 0 && check == 0 &&
                <>
                    <Header/>
                    <div className="products container">
                        <CircularProgress className='loader' size="150px" />
                    </div>
                </>
            }

            { // If data is retrieved
                pending == 1 && check == 0 &&

                <>
                    <Header/>
                    <div className="products container">

                        {   // Show Products
                            products.map(product => {

                                return(
                                    <>
                                    <div className="product card ">
                                        <img className='product-image card-img-top' src={product.product_image} alt={product.product_image} />
                                        <div class="card-body">
                                            <h5 class="card-title product-title">{product.product_name}</h5>
                                            <p class="card-text product-details">{product.product_detail.substr(0, 70) + "..."}</p>
                                            <button class="btn btn-primary" onClick={() => productDetails(product)}>Buy</button>
                                        </div>
                                    </div>
                                    </>
                                );

                            })
                        }

                    </div>
                    <Footer/>
                </>
            }

            { // Product Details View

                pending == 1 && check == 1 &&
                <>
                    <Header/>
                    <ProductDetails product = {dproduct}/>
                </>
            }
        
        </>
    );
}

export default Products