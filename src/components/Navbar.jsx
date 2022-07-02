import React from "react";
import '../styles/Navbar.css'

const Navbar = ({setShow,size }) => {
    return(
        <nav>
            <div className="navBox">
                <span className="myShop" onClick={ () => setShow(true)}>My Shopping</span>
                <div className="cart" onClick={ () => setShow(false)}>
                    <span>
                        <i className="fas fa-cart-plus"></i>
                    </span>
                    <span>{size}</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar