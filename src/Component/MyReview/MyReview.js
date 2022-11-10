
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import NewReview from '../NewReview/NewReview';

const MyReview = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    
    useEffect( () =>{
        
        fetch(`https://food-corner-server-site.vercel.app/reviewer?email=${user?.email}`)
        .then(res =>  res.json())
        .then(data =>  {
            setReviews(data)
        })
        .catch(err => console.error(err))
    }, [user?.email])


    const handleRemove = id => {
        const proceed = window.confirm('Are you sure to Remove');
        if (proceed) {
            fetch(`https://food-corner-server-site.vercel.app/reviewer/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Remove successfully');
                        const remaining = reviews.filter(rv => rv._id !== id);
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