import React,{Fragment} from 'react';
import Backdrop from './Backdrop';
import ModalOverLay from './Modaloverlay';


      
       const Modal=(props)=>{

    return<Fragment> 
    <Backdrop  onClick={props.onClick} />
    <ModalOverLay onClick={props.onClick} />
    </Fragment>
       }

export default Modal;