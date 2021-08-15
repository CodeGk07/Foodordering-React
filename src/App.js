import React,{useState} from 'react';
import Header from './Component/Layout/Bar/Header';
import Footer from './Component/Layout/Bar/Footer';
import Home from './Component/User/Home';
import Modal from './Component/Layout/UI/Modal';
import RanderLogin from './Component/User/Login/RanderLogin';
import CartProvider from './Store/CartProvider';



const App=()=>{

   const [loginForm,setLoginForm]=useState(false);


   const showLoginForm=()=>{
      setLoginForm(true)
   }
   
   const hideLoginForm=()=>{
      setLoginForm(false)
   }


   const[onModal,onSetModal]=useState(false);

   const ShowModelHandler=()=>{
       onSetModal(true);
   }
  
   const HideMOdelHandler=()=>{
       onSetModal(false);
   }

  return <CartProvider>
      <Header onOpenForm={showLoginForm} oncloseForm={hideLoginForm} onOpenModal={ShowModelHandler} />
      {onModal&&<Modal onClick={HideMOdelHandler}  />}
      {loginForm&&<RanderLogin/>}
      <Home  />
      <Footer/>
      </CartProvider>
};

export default App;