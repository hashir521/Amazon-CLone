import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'



const Subtotal = () => {
      const[{basket},dispatch] = useStateValue();
  return (
    <div className='subtotal'>
        <CurrencyFormat
                renderText={(value) =>(
                    <>
                    <p>
                        {/* Subtotal(0 items) : <strong>0</strong> */}
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type="checkbox" /> This order contains a gift
                    </small>

                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            
        />
        <button >Proceed to checkout</button>
       
    </div>
  )
}

export default Subtotal