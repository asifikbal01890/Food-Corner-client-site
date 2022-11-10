
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import NewReview from '../NewReview/NewReview';

const MyReview = () => {
    const [isLoading, setIsLoading] = useState(true)
    const {user} = useContext(AuthContext);
    console.log(user?.email);
    const [reviews, setReviews] = useState({});
    console.log(reviews);
    
    useEffect( () =>{
        
        fetch(`http://localhost:5000/reviewer?email=${user?.email}`)
        .then(res =>  res.json())
        .then(data =>  {
            setReviews(data)
        })
        .catch(err=> console.log(err))
    }, [user?.email])


    const handleRemove = id => {
        const proceed = window.confirm('Are you sure to Remove');
        if (proceed) {
            fetch(`http://localhost:5000/reviewer/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Remove successfully');
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }
    return (
        <div className='mt-5'>
            <div>
                <h1 className='f-corner mb-3'>Your Reviews {reviews.length}</h1>
            </div>
                {
                    reviews.map( review => <NewReview
                        key={review._id}
                        review={review}
                        handleRemove={handleRemove}
                    ></NewReview>)
                }
        </div>
    );
};

export default MyReview;