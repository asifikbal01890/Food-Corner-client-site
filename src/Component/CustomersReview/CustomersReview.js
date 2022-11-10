import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const CustomersReview = ({food}) => {

    const {_id, name} = food;

    const {user} = useContext(AuthContext);


    const handleReview = event =>{
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'unregistered';
        const userName = form.name.value;
        const userrating = form.rating.value;
        const text = form.text.value;

    const reviewer = {
        id: _id,
        foodName: name,
        email,
        userName,
        userrating,
        text
    }    

    if(!user){
        return alert('Login 1st');
    }
    

    fetch('https://food-corner-server-site.vercel.app/reviewer', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(reviewer)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.acknowledged){
            alert('review implement success');
            form.reset();
        }
    })
    .catch(e => console.error(e));

    }
    return (

    <form onSubmit={handleReview}>
      <div className='w-50 mx-auto shadow-lg p-3 mb-5 bg-body rounded'>
        <div className="mb-3 r0">
           <div className='d-flex mb-3'>
           <input name="name" type="name" className="form-control me-3" id="exampleFormControlInput1" placeholder="name"/>
           <input name="rating" type="number" className="form-control" id="exampleFormControlInput1" placeholder="rating"/>
           </div>
            <input name="email" type="email" className="form-control" id="exampleFormControlInput1" placeholder="email" defaultValue={user?.email}/>
           
            </div>
            <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Comment</label>
            <textarea name='text' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <button className='btn btn-outline-primary fw-semibold mt-4'>Add Review</button>
            </div>
        </div>
    </form>
    
    );
};

export default CustomersReview;