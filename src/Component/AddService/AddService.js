import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const AddService = () => {
    const {user} = useContext(AuthContext);

    const handleAddService= event =>{
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'unregistered';
        const name = form.name.value;
        const img = form.img.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const text = form.text.value;

    const foods = {
        email,
        name,
        description: text,
        img,
        price,
        rating,
    }
}

    return (

            <form onSubmit={handleAddService} >
                <div className='w-50 mx-auto shadow-lg p-3 mb-5 bg-body rounded mt-5'>
                    <div className="mb-3 r0">
                    <div className='d-flex mb-3'>
                    <input name="name" type="name" className="form-control me-3" id="exampleFormControlInput1" placeholder="name"/>
                    <input name="price" type="number" className="form-control" id="exampleFormControlInput1" placeholder="price"/>
                    </div>
                    <div className='d-flex mb-3'>
                    <input name="img" type="name" className="form-control me-3" id="exampleFormControlInput1" placeholder="Image url"/>
                    <input name="rating" type="number" className="form-control" id="exampleFormControlInput1" placeholder="rating"/>
                    </div>
                    <input name="email" type="email" className="form-control" id="exampleFormControlInput1" placeholder="email" defaultValue={user?.email}/>
                        </div>
                        <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea name='text' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <button className='btn btn-outline-primary fw-semibold mt-4'>Add Service</button>
                    </div>
                </div>
            </form>

    );
};

export default AddService;