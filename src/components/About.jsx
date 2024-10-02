import React from 'react';
import aboutImg from '../assets/aboutImg.png';
import { Carousel } from 'react-bootstrap';
import girl1 from '../assets/girl1.png';
import boy2 from '../assets/boy2.png';
import girl3 from '../assets/girl3.png';

const About = () => {
    return <>
        <div className="container mt-5   shadow p-3 mb-5 bg-light rounded">
            <div className="row align-items-center">
                {/* Left Column: Image with Labels */}
                <div className="col-md-6">
                    <div className="position-relative">
                        <img 
                            src={aboutImg}
                            alt="Peaky Blinders"
                            className="img-fluid" 
                        />
                    </div>
                </div>

                {/* Right Column: Product Details */}
                <div className="col-md-6 text-start">
                    <h2>About Us</h2>
                    <p><strong>DESCRIPTION</strong></p>

<p className='fs-5'>Designated ecommerce platforms provide ready-made infrastructure for product catalog management, order processing, payment integration, and customer management. Depending on an organization’s specific needs, it may opt to join an existing ecommerce platform or build its own from scratch.  </p>            
   
                </div>
            </div>
        </div>


        <div className="container mt-3 shadow p-3 mb-5 bg-white rounded">
        <div className="container mt-5">
            <div className="row">
                {/* Left Column: Text and Countdown */}
                <div className="col-md-6">
                    <div className="text-center mb-4 mt-5">
                        <h2 className='fw-bold'>People Also Loved</h2>
                        <p className='fs-4'>
                      There are lots of new collections have discounts !
                        </p>
                    </div>

                    <div className="countdown text-center mb-4">
                        <h4 className='fw-bold mb-5'>Hurry, Before It’s Too Late!</h4>
                        <div className="d-flex justify-content-center">
                            <div className="countdown-item mx-2">
                                <span>02</span>
                                <h6>Days</h6>
                            </div>
                            <div className="countdown-item mx-2">
                                <span>06</span>
                                <h6>Hr</h6>
                            </div>
                            <div className="countdown-item mx-2">
                                <span>05</span>
                                <h6>Mins</h6>
                            </div>
                            <div className="countdown-item mx-2">
                                <span>30</span>
                                <h6>Sec</h6>
                            </div>
                        </div>
                    </div>
                </div>




                {/* Right Column: Carousel */}
                <div className="col-md-6">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block carsoulimg"
                                src={girl1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <div className="carousel-caption-content">
                                    <h5>Summer Collection</h5>
                                    <p>30% OFF</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block carsoulimg"
                                src={boy2}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <div className="carousel-caption-content">
                                    <h5>Spring Sale</h5>
                                    <p>20% OFF</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block carsoulimg"
                                src={girl3}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <div className="carousel-caption-content">
                                    <h5> Winter Deals</h5>
                                    <p>15% OFF</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
</div>
   </>
}

export default About;