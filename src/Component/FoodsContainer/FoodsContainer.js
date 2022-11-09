import React from 'react';
import { useLoaderData } from 'react-router-dom';

import FoodCards from '../FoodCards/FoodCards';

const FoodsContainer = () => {

    const foodItems = useLoaderData();
    console.log(foodItems);
    return (
        <div className='mt-5 container'>
            <h1 className='f-corner text-orange'>Welcome to our Foods Container</h1>
            <p className='f-corner fs-5'>All the foods here is prepared by me. I hope you like it</p>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
                {
                    foodItems.map( foodItem => <FoodCards
                        key={foodItem.id}
                        foodItem={foodItem}
                    ></FoodCards>)
                }
            </div>
        </div>
    );
};

export default FoodsContainer;