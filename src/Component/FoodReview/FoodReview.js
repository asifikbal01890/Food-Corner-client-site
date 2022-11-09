import React from 'react';
import { FaStar } from 'react-icons/fa';
import './FoodReview.css';

const FoodReview = ({oldUser}) => {
    const {name, date, picture, text, rating} = oldUser
    console.log(oldUser);
    return (
        <div>
            <div class="mb-3 w-75 mx-auto">
                <div class="row g-0 shadow p-3 mb-5 bg-body rounded">
                    <div class="col-md-2">
                    <img src={picture} class="w-user rounded-circle" alt="..."/>
                    <h5 className='fw-bolder pt-2'>{name}</h5>
                    </div>
                    <div class="col-md-10">
                        <p class="card-text pt-4 fw-semibold">{text}</p>
                        <div className='d-flex justify-content-between'>
                        <p class="card-text"><small class="text-muted">{date}</small></p>
                        <p className='text-orange'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodReview;