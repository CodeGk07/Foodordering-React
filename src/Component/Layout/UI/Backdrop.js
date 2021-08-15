import React from 'react';
import style from './Backdrop.module.css';

const Backdrop = (props) => {
    return <div className={style.backdrop} onClick={props.onClick}/>;
  };

  export default Backdrop;