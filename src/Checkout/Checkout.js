import React from 'react'
import '../Checkout/checkout.css'
import { useStateValue } from '../contextApi/StateProvider'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import CurrencyFormat from 'react-currency-format'

function Checkout() {
    const [{basket}]=useStateValue();
  return (
    <div className='checkout'>
       <div className='checkout-left'>
       <img className='checkout-img' 
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt='img'
        ></img>
      {basket?.length===0 ? (
        <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>You have no items in your Basket.To buy one or more item "Add to Basket" next to the item.</p>
        </div>
      ) : (
         <div>
            <h2 className='checkout-title'>Your Shopping Basket</h2>
            {basket?.map((item)=>(
            
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                
                )) }
         </div>
      )}
       </div>
       {basket.length>0&&(
            <div className='checkout-right'>
                <h1>SubTotal</h1>
                <Subtotal/>
            </div>
        )}
    </div>
  )
}

export default Checkout
