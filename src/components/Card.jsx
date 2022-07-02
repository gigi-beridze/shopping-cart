import React from "react";

const Card = ({ item, handleClick }) => {
    const {title,author,price,img} = item
    return(
        <div className="cards">
            <div className="imageBox">
                <img src={img} alt="" />
            </div>
            <div className="details">
                <p>{title}</p>
                <p>{author}</p>
                <p>{price}$</p>
                <button onClick={ () => handleClick(item)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Card