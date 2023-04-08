import React from 'react'

// Styles ====================================
import './Styles/product_details.css'

const ProductDetails = (props) => {
    
    return (
        <>
            <div className="main">
                <div className="box2 left2">
                    <img src={props.product.product_image} alt="product_image" />
                </div>
                <div className="box2 right2">
                    <h5 class="card-title product-title">{props.product.product_name}</h5>
                    <p class="card-text product-details">{props.product.product_detail}</p>
                    <button class="btn btn-primary">Buy</button>
                </div>
            </div>
        
        </>
    )
}

export default ProductDetails