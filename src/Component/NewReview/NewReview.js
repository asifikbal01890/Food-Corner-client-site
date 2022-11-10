import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './NewReview.css';

const NewReview = ({review, handleRemove}) => {
    const {user} = useContext(AuthContext)
    const {text, userrating, userName, foodName, _id} = review
    console.log(_id)
    return (
        <div className='w-75 mx-auto'>
            <div className="mb-3 w-75 mx-auto">
                <div className="row g-0 shadow p-3 mb-5 bg-body rounded">
                    <div className="col-md-2">
                    <img src={user.photoURL} className="w-user rounded-circle" alt="..."/>
                    <h5 className='fw-bolder pt-2'>{userName}</h5>
                    </div>
                    <div className="col-md-10">
                        <h4 className='fw-bold'>{foodName}</h4>
                        <p className="card-text fw-semibold">{text}</p>
                        
                    </div>
                    <div className='d-flex justify-content-between'>
                            <div className='d-flex align-items-center ps-10'>
                                <p className="card-text"><small className="text-muted">Rating:</small></p>
                                <p className='text-orange ps-2'><FaStar></FaStar><span className='f-corner ps-1 '>{userrating}</span></p>
                            </div>
                            <div>
                                <button onClick={() => handleRemove(_id)} className='btn-pink text-white fs-4 fw-semibold px-4 pb-2 rounded-2'>Remove</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default NewReview;