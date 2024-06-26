import React from 'react'
import '../Product/product.css'
import { useStateValue } from '../contextApi/StateProvider'
function Product( {id , title , image , price , rating}) {
  const [{basket} , dispatch]=useStateValue();
  const addtobasket =()=>{
 
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating
      }
     

    })
  }
  return (
    <div className='product'>
        <div className='product-info'>
        <p>{title}</p>
      <p className='product-price'>
      <small>$</small>
      <strong>{price}</strong>
      </p>
      <div className='product-rating'>
      {
       Array(rating)
      .fill()
      .map((_) => (
        <p >⭐</p>
      ))
      }
        </div>
     
      </div>
    
        <img className='product-img' src={image} alt='img'></img>
        <button className='product-button' onClick={addtobasket}>Add to basket</button>
      </div>
    
  )
}

export default Product
