import React,{useContext} from "react";
import style from './HeaderButton.module.css'
import CartButton from '../UI/CartButton';
import CartContext from "../../../Store/cart-context";

const HeaderButton = (props) => {

   const cartCtx = useContext(CartContext)

   const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <div className={style.container}>
      <button className={style.btn} onClick={props.onClick} >
        <span className={style.cart}><CartButton/></span>
        <span className={style.name}>Cart</span>
        <span className={style.no}>{numberOfCartItems}</span>
      </button>
    </div>
  );
};

export default HeaderButton;
