import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
const CheckoutProduct = ({id,image,title,price,rating}) => {
    const[{basket},dispatch] = useStateValue()
    const removeFromBasket = () =>{
        //remove item from the basket
        dispatch({
            type:'REMOVE_BASKET',
            id:id,
        });
    }
  return (
    <div className='CheckoutProduct'>
        <img className='checkoutProduct__image' src={image} />
        <div className='checkoutProduct__info'>
            <p className='checkoutProducy__title'>{title}</p>
            <p className='checkoutProduct__price'>
                <small>$</small>
                <strong> {price} </strong>
            </p>
            <div className="checkoutProduct__rating">
                {
                    Array(rating).fill().map((_,i) => (
                        <p>⭐</p>
                    ))
                }
            </div>
            <button onClick={removeFromBasket}>remove from basket</button>

        </div>


    </div>
  )
}

export default CheckoutProduct