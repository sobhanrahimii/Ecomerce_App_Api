import React from "react";
import { AiOutlineClose, AiOutlinePlus , AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from '../../store/cartSlice'

const CartItems = (props) => {
  const dispatch = useDispatch()
  const increament = () => {
    dispatch(cartActions.addToCart({id,name,price}))
  }

  const decreamnet = () => {
      dispatch(cartActions.removeFromCart(id))
  }
  const { id, name, cover, price, quantity, totalPrice } = props;

  return (
    <>
    <div className='cardList' key={id}>
      <div className='cartContent'>
        <div className='img'>
          <img src={cover} alt='' />
          <button className='remove flexCenter'>
            <AiOutlineClose />
          </button>
        </div>
        <div className='details'>
          <p>{name}</p>
          <label htmlFor=''>Unit Price ${price}</label>

          <div className='price'>
            <div className='qty flexCenter'>
              <button className='plus' onClick={increament}>
                <AiOutlinePlus />
              </button>
              <button className='num'>1{quantity}</button>
              <button className='minus' onClick={decreamnet}>
                <AiOutlineMinus />
              </button>
            </div>
            <div className='priceTitle'>${totalPrice}</div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default CartItems;
