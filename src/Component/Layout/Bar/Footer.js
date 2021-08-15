import React from 'react';
import style from './Footer.module.css'

const Footer=()=>{
    return <div className={style.container}>
        <h2 className={style.header}>AppName</h2>
        <p className={style.para}><span className={style.span}>&copy;2021 Company pvt Ltd</span> The best company and other details about company</p>
    </div>
};

export default Footer;