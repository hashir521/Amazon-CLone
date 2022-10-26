import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import './Header.css'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
const Checkout = () => {
  const[{basket, user},dispatch] = useStateValue();
  return (
      <div>
     
    <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />

                <div >
                    <h3>Hello, {user?.email} </h3>
                    <h2 className='checkout__title'>your shopping basket</h2>
                    {/* checkout product */}
                    {
                      basket.map(item => (
                        <CheckoutProduct 
                          id = {item.id}
                          title ={item.title}
                          image = {item.image}
                          price ={item.price}
                          rating ={item.rating}
                         />
                      ))
                    }

                    {/* checkout product */}
                    {/* checkout product */}
                    {/* checkout product */}

                    
                </div>
            </div>
            <div className="checkout__right">
              <Subtotal/>
            </div>
    </div>
    </div>
  )
}

export default Checkout