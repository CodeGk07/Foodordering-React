import React from 'react';
import FoodItem from './FoodItem';
import style from './Foods.module.css';

const Foods=(props)=>{
    const DumItem=[
        {
           Id:'f1',
           name:'Sushi',
           desc:'Finest fish and veggies',
           price:'$22.99',
        },
        {
           Id:'f2',
           name:'Schnitzel',
           desc:'A german Speciality',
           price:'$20.99',
        },
        {
           Id:'f3',
           name:'Barbecue Burger',
           desc:'Amercian raw,meaty',
           price:'$16.99',
        },
        {
           Id:'f4',
           name:'Green Bowl',
           desc:'Healthy and Green',
           price:'$12.99',
        },
     
     ]
    return(
    <div className={style.container}>
          {DumItem.map((food)=>{
             return(
             <FoodItem 
              key={food.Id} name={food.name} desc={food.desc} price={food.price}  />
         )}) }
    </div>
    )};

export default Foods;