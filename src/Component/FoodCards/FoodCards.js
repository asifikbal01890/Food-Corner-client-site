import React from 'react';
import { Link } from 'react-router-dom';

const FoodCards = ({foodItem}) => {
    const {id, name, img, price, description} = foodItem
    return (
        <div className="col">
            <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title fw-bolder text-orange fs-3">{name}</h5>
                    <p className="card-text">{description.slice(0,100)}...</p>
                    <p className='fs-5 fw-semibold'><span className='pe-2'>Price -</span>${price}</p>
                    <Link to={`/foods/${id}`}><button className='btn-pink text-white fs-4 fw-semibold px-5 pb-2 rounded-5'>See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCards;