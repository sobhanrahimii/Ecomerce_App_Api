import React, { useState } from 'react'
import { BiShoppingBag } from "react-icons/bi"
import { AiOutlineClose } from 'react-icons/ai'
import CartItems from './CartItems'
import { product } from '../../assets/data/data'
import { useSelector } from 'react-redux'

const Card = () => {
  const [cardOpen , setCardOpen] = useState(false)
  const closeCard = () => {
    setCardOpen(false)
  }
  // تعداد داخل سبد خزید
  const quantity = useSelector((state) => state.cart.totalQuantity)
  // نشان دهنده محصولاتی که به سبد اضافه کردیم
  const cartItems = useSelector((state) => state.cart.itemList)

  // محاسبه total
  let total = 0
  const itemsLists = useSelector((state) => state.cart.itemList)
  itemsLists.forEach((item)=>{
    total += item.totalPrice
  })

  return (
    <div>
      <div className='card' onClick={() => setCardOpen(!cardOpen)}>
        <BiShoppingBag className='cardIcon' />
        <span className='flexCenter'>{quantity}</span>
      </div>
      <div className={cardOpen ? "overlay" : "nonoverlay"}></div>

      <div className={cardOpen ? "cartItem" : "cardhide"}>
        <div className='title flex'>
          <h2>Shopping Cart</h2>
          <button onClick={closeCard}>
            <AiOutlineClose className='icon' />
          </button>
        </div>
        
        {
          cartItems.map((item)=>(
            <CartItems {...item} />
          ))
        }

        <div className='checkOut'>
          <button>
            <span>Priceed To Checkout</span>
            <label htmlFor=''>${total}</label>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card