import React,{useState} from 'react';
import style from './Header.module.css'
import NavBar from './NavBar';
import foodp from './foodp.jpg';



const Header=(props)=>{

    const[searchInput,setSearchInput]=useState('');

    const searchInputHandler=(event)=>{
        setSearchInput(event.target.value)
      
    };

    const searchHandler=()=>{
        if(searchInput.length>0){
        alert("Search module is comming soon");}
        else{
            alert("Search field is blank")
        }
        setSearchInput('')
    };

    const singupHandler=()=>{
        alert('signup module is comming soon')
    };

    return <div className={style.container}>
        <ul className={style.navitem}>
        <h2 className={style.header}>App Name</h2>
        <div className={style.con}>
              <input className={style.input} value={searchInput} onChange={searchInputHandler} type="search" />
              <button className={style.sbtn} onClick={searchHandler} >+</button>
              <button className={style.login} onClick={props.onOpenForm} >LogIn</button>
              <button className={style.logout} onClick={singupHandler} >SignUp</button>
          </div>
          </ul>
        <NavBar onClick={props.onOpenModal} />
        <img className={style.img} src={foodp} alt="There is The image of delicious food" />
    </div>
};

export default Header;