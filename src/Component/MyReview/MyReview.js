import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewReview from '../NewReview/NewReview';

const MyReview = () => {
    const reviews = useLoaderData();
    console.log(reviews);
    return (
        <div>
            <div>
                <h1>{reviews.length}</h1>
            </div>
            {
                reviews.map( review => <NewReview
                    key={review._id}
                    review={review}
                ></NewReview>)
            }
        </div>
    );
};

export default MyReview;