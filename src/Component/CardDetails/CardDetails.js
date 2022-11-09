import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CustomersReview from '../CustomersReview/CustomersReview';
import FoodReview from '../FoodReview/FoodReview';

const CardDetails = () => {
    const food = useLoaderData();
    console.log(food.review[0]);
    return (
        <div className='container mt-5'>
            <div>
                <h1 className='f-corner'><span className='text-orange'>Food</span> Corner</h1>
                <p className='f-corner'>Your order is delivered within <span className='fs-5 text-orange'>30</span> minutes</p>
            </div>
            <div className='w-75 mx-auto'>
                <img className='w-75 rounded-4' src={food.img} alt="" />
                <h2 className='f-corner pt-4 text-orange'>{food.name}</h2>
                <p>{food.description}</p>
                <div>
                    <p>Price - ${food.price}</p>
                    <p></p>
                </div>
                <button className='btn-pink text-white fs-4 fw-semibold px-5 pb-2 rounded-5'>Order Now</button>
            </div>
            <div className='mt-5 border rounded-3 pt-4'>
                <div>
                    <h3 className='f-corner'>Review & More</h3>
                </div>
                <div className='pt-4'>
                {
                  food.review.map(oldUser=> <FoodReview
                      key={oldUser._id} 
                      oldUser={oldUser} 
                  ></FoodReview>)  
                }
                </div>
            </div>
            <div>
            <div>
                <div className='pt-5 pb-2'>
                    <h2 className='f-corner'>Right Yours Comment For Foods</h2>
                </div>
            <CustomersReview
             key={food.id}
             food={food}
            ></CustomersReview>
            </div>
            </div>
        </div>
    );
};

export default CardDetails;