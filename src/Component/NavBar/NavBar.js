import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'


const NavBar = () => {
return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light shadow bg-body rounded">
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <Link to={'/'} class="navbar-brand" >
            <div className='d-flex align-items-center'>
                        <div>
                            <img className='w-10 rounded-circle' src="https://i.pinimg.com/originals/4e/95/ff/4e95ff2406e7914e70cbbba6dd9c51d2.jpg" alt=""/>
                        </div>
                        <div className='ps-2 fw-bold fs-3 text-orange m-back'>
                            Corner
                        </div>
                    </div>
            </Link>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-25 m-auto">
                <li class="nav-item">
                <Link to={'/home'} class="nav-link active fw-semibold fs-5 ebtn rounded-3" aria-current="page" >Home</Link>
                </li>
                <li class="nav-item">
                <Link to={'/services'} class="nav-link active fw-semibold fs-5 ebtn rounded-3 mx-4" aria-current="page" >Services</Link>
                </li>
                <li class="nav-item">
                <Link to={'/Blog'} class="nav-link active fw-semibold fs-5 ebtn rounded-3" aria-current="page" >Blog</Link>
                </li>
            </ul>
            </div>

                <>
                <Link to={'/register'} class="btn btn-light nav-link active fw-semibold fs-5 me-3 px-3 py-2" aria-current="page" >Sign up</Link>
                <Link to={'/login'} class="nav-link active fw-semibold fs-5 btn btn-primary px-3 py-2" aria-current="page" >Login</Link>
                </>
        </div>
        </nav>
    </div>
    );
};

export default NavBar;