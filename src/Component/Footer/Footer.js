import React from 'react';

const Footer = () => {
    return (
        <div className='mt-5'>
                <footer className="text-center text-lg-start bg-secondary text-white pt-1">
  
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                
                    <div className="row mt-3">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                        <h6 className="text-uppercase fw-bold mb-4">
                            <i className="fas fa-gem me-3"></i>
                            <div className='d-flex align-items-center'>
                                        <div>
                                            <img className='w-10 rounded-circle' src="https://i.pinimg.com/originals/4e/95/ff/4e95ff2406e7914e70cbbba6dd9c51d2.jpg" alt=""/>
                                        </div>
                                        <div className='ps-2 fw-bold fs-3 text-orange m-back f-corner'>
                                            Corner
                                        </div>
                                    </div>
                        </h6>
                        <p>
                                Homemade food is always treated as a privilege, especially with our hectic life schedules. Now a days, people seldom cook at home and find a good reason to go out and eat.
                        </p>
                        </div>


                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 className="text-uppercase fw-bold mb-4">
                            Products
                        </h6>
                        <p>
                            <a href="#!" className="text-reset">Angular</a>
                        </p>
                        <p>
                            <a href="#!" className="text-reset">React</a>
                        </p>
                        <p>
                            <a href="#!" className="text-reset">Vue</a>
                        </p>
                        <p>
                            <a href="#!" className="text-reset">Laravel</a>
                        </p>
                        </div>



                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 className="text-uppercase fw-bold mb-4">
                            Useful links
                        </h6>
                        <p>
                            <a href="#!" className="text-reset">Pricing</a>
                        </p>
                        <p>
                            <a href="#!" className="text-reset">Settings</a>
                        </p>
                        <p>
                            <a href="#!" className="text-reset">Orders</a>
                        </p>
                        <p>
                            <a href="#!" className="text-reset">Help</a>
                        </p>
                        </div>
                

                
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                        <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                        <p>
                            <i className="fas fa-envelope me-3"></i>
                            info@example.com
                        </p>
                        <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                        <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </div>
                    
                    </div>

                    </div>
                </section>


                
                <div className="text-center p-4">
                    © 2021 Copyright
                </div>
                
                </footer>
        </div>
    );
};

export default Footer;