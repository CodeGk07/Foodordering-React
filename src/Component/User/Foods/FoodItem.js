import React, { useState } from "react";
import style from "./FoodItem.module.css";

const FoodItem = (props) => {
  const [title, settitle] = useState("1");

  const addinputhandler=(event)=>{
      settitle(event.target.value)
  }

  const onAddHanlder = (event) => {
    alert("This dish is added");
   event.preventDefault() 
   
   props.Onadd(title)

    settitle('1')
  };

  return (
    <div className={style.container}>
      <div>
        <p className={style.name}>{props.name}</p>
        <p className={style.desc}>{props.desc}</p>
        <p className={style.price}>{props.price}</p>
      </div>
      <div>
        <label htmlFor="input" className={style.amount}>
          Amount
        </label>
        <input
          className={style.input}
          type="number"
          min="1"
          step="1"
          defaultValue="1"
          id={props.Id}
          onChange={addinputhandler}
          value={title}
        />
        <button className={style.button} onClick={onAddHanlder}>
          + Add
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
