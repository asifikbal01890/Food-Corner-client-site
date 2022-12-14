import React from 'react';
import { FaStar } from 'react-icons/fa';
import MyReview from '../MyReview/MyReview';
import './FoodReview.css';

const FoodReview = ({oldUser}) => {
    const {username, date, picture, text} = oldUser
    console.log(oldUser);
    return (
        <div>
            <div className="mb-3 w-75 mx-auto">
                <div className="row g-0 shadow p-3 mb-5 bg-body rounded">
                    <div className="col-md-2">
                    <img src={picture} className="w-user rounded-circle" alt="..."/>
                    <h5 className='fw-bolder pt-2'>{username}</h5>
                    </div>
                    <div className="col-md-10">
                        <p className="card-text pt-4 fw-semibold">{text}</p>
                        <div className='d-flex justify-content-between'>
                        <p className="card-text"><small className="text-muted">{date}</small></p>
                        <p className='text-orange'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodReview;