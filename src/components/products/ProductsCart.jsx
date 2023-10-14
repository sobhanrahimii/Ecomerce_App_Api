import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { cartActions } from "../../store/cartSlice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductsCart = (props) => {
  // tostify message
  const notify = () => {
    toast("Default Notification !");

    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER
    });
  }

  const dispatch = useDispatch()
  const { id, cover, name, price } = props;
  // add to cart
  const addToCart = () => {
    dispatch(cartActions.addToCart({id,name,price,cover}))
    toast.success('محصول به سبد خرید اضافه شد!');
  }
  return (
    <>
      <div className="box boxItems" id="product">
        <div className="img">
          <Link>
            <img src={cover} alt="cover" />
          </Link>
        </div>
        <div className="details">
          <h3>${price}</h3>
          <p>{name}</p>
          <button>
            <AiOutlinePlusCircle onClick={addToCart} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductsCart;
