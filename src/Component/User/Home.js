import React from 'react';
import Foods from './Foods/Foods';
import MealSummary from './Foods/MealSummary';



const Home=(props)=>{



    return <div>
       
        <MealSummary/>

       <Foods items={props.items} />

         <h2>This is our home page</h2>
    </div>
};

export default Home;