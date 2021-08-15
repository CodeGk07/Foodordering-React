import React from 'react';
import style from './Modaloverlay.module.css';

const ModalOverLay=(props)=>{
    return <div className={style.container}>

       <h4 className={style.name}>Burger</h4>
   <div>
       <h2 className={style.amount}>Total Amount: <font className={style.price}>52.45</font> </h2>
       
   </div>
   <div>
       <button className={style.order} onClick={props.onClick}>Order</button>
       <button className={style.cancel} onClick={props.onClick} >Cancel</button>
   </div>
</div>
 };

 export default ModalOverLay;