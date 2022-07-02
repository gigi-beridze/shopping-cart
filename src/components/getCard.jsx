import React from 'react'
import Data from '../Data'
import Card from './Card'
import "../styles/getCard.css"

const GetCard = ({handleClick}) => {
    return(
        <section>
            {
                Data.map((item) => (
                    <Card key={item.id} item={item} handleClick={handleClick}/>
                ))
            }
        </section>
    )
}

export default GetCard