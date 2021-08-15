import React from "react";
import style from "./NavBar.module.css";
import HeaderButton from "./HeaderButton";


const NavBar = (props) => {
  return (
    <div className={style.container} >
        <nav >
      <ul className={style.navitem}>
       
          <li><a href="" className={style.item}>Home</a></li>
          <li><a href="" className={style.item}>About</a></li>
         <div className={style.bcon}>
          <HeaderButton onClick={props.onClick} />
           </div>      
  
      </ul>
      </nav>
    </div>
  );
};

export default NavBar;
