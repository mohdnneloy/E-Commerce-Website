import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Header from '../Components/Header';

// Styles ===============================
import './Styles/products.css';
import { CircularProgress } from '@mui/material';
import Footer from '../Components/Footer';

const Products = () => {

    const localhostb = "http://localhost:8000";
    const [pending, setPending] = useState(0);
    const [products, setProducts] = useState([]);
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

    return (
        
        <>            
            { // If data is not retrieved yet
                pending == 0 && 
                <>
                    <Header/>
                    <div className="products container">
                        <CircularProgress className='loader' size="150px" />
                    </div>
                </>
            }

            { // If data is retrieved
                pending == 1 && 

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
                                            <a href="#" class="btn btn-primary">Buy</a>
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
        
        </>
    );
}

export default Products