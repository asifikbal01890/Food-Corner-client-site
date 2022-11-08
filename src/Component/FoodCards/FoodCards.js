import React from 'react';
import { Link } from 'react-router-dom';

const FoodCards = ({foodItem}) => {
    const {id, name, img, price, description} = foodItem
    return (
        <div class="col">
            <div class="card h-100">
                    <img src={img} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title fw-bolder text-orange fs-3">{name}</h5>
                    <p class="card-text">{description.slice(0,100)}...</p>
                    <p className='fs-5 fw-semibold'><span className='pe-2'>Price-</span>${price}</p>
                    <Link to={`/foods/${id}`}><button className='btn-pink text-white fs-4 fw-semibold px-5 pb-2 rounded-5'>See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCards;