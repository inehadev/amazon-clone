import React from 'react'
import '../Checkout/subtotal.css'
import { useStateValue } from '../contextApi/StateProvider'
import { getBasketTotal } from '../contextApi/reducer'
import CurrencyFormat from 'react-currency-format'
function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) :
              <strong>${`${getBasketTotal(basket)} `}</strong>
            </p>
            <small className='subtotal-gift'>
              <input className='subtotal-input' type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className='subtotal-button'>Proceed Checkout</button>
    </div>
  )
}

export default Subtotal
