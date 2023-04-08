import React from 'react'
import './Styles/homecomp.css'

// Images ========================
import shopping from '../Assets/Images/shopping.jpg'

const HomeComp = () => {
  return (
    <div className="main">
        <div className="box left">
          <h2>Spacio</h2>
          <p>Our store at your door!</p>
        </div>

        <div className="box right">
          <img src={shopping} alt="shopping" />
        </div>
    </div>
  )
}

export default HomeComp