import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const NewReview = ({review}) => {
    const {user} = useContext(AuthContext)
    console.log(user.photoURL)
    const {text, userrating } = review
    return (
        <div>
            <div className="mb-3 w-75 mx-auto">
                <div className="row g-0 shadow p-3 mb-5 bg-body rounded">
                    <div className="col-md-2">
                    <img src={user.photoURL} className="w-user rounded-circle" alt="..."/>
                    <h5 className='fw-bolder pt-2'>{user.displayName}</h5>
                    </div>
                    <div className="col-md-10">
                        <p className="card-text pt-4 fw-semibold">{text}</p>
                        <div className='d-flex justify-content-between'>
                        <p className="card-text"><small className="text-muted">Rating</small></p>
                        <p className='text-orange mb-2'><FaStar></FaStar><span className='f-corner ps-2 '>{userrating}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewReview;