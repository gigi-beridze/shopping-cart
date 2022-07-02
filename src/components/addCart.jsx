import React, { useState, useEffect } from "react";
import "../styles/addCart.css"

const AddCart = ({cart, setCart, handleChange}) => {
    const [price,setPrice] = useState(0)
    
const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });
    return(
        <article>
            {
                cart.map((item) => (
                    <div className="cartBox" key={item.id}>
                        <div className="cartImg">
                            <img src={item.img} alt="" />
                        </div>
                        <p className="itemTitle">{item.title}</p>
                        <div className="handleButtons">
                            <button onClick={() => handleChange(item, -1)}>-</button>
                            <button>{item.amount}</button>
                            <button onClick={() => handleChange(item, 1)}>+</button>
                        </div>
                        <div className="handleRemove">
                            <span className="itemPrice">{item.price}$</span>
                            <button onClick={() => handleRemove(item.id)} >Remove</button>
                        </div>
                    </div>
                ))}
                <div className="total">
                    <span>Total Price of your cart</span>
                    <span>USD - {price}</span>
                </div>
        </article>
    )
}

export default AddCart