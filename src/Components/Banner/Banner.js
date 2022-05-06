import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel fade indicators={false} className="mt-0">
                <Carousel.Item interval={3000}  >
                    <img
                        className="d-block w-100 banner"
                        src="https://i.ibb.co/7XKb38G/backgound-Banner.png"
                        alt="First slide"
                    />
                    <div className="d-flex cars">
                        <div>
                            <img width={270} src="https://i.ibb.co/4YrKwVW/car3.png " />
                        </div>
                        <div>
                            <img width={270} src="https://i.ibb.co/wcjfxPm/car2.png " />
                        </div>

                        <div>

                            <img width={270} src="https://i.ibb.co/WFcTdjN/car.png" />
                        </div>
                        <div>

                            <img width={270} src="https://i.ibb.co/mF4D7xx/car1.png " />
                        </div>
                        <div>
                            <img width={270} src="https://i.ibb.co/mGn9rfT/car4.png " />
                        </div>
                    </div>

                    <Carousel.Caption className='caption'>
                        <p>we have everything</p>
                        <h2 className='text-uppercase'>your car needs</h2>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/7XKb38G/backgound-Banner.png"
                        alt="Second slide"
                    />
                    <div className='d-flex cars'>
                        <div >
                            <img width={600} src="https://i.ibb.co/pn85YWy/slider2-1.png" />
                        </div>
                        <div >
                            <img width={600} src="https://i.ibb.co/zFXm9SG/slider2-2.png" />
                        </div>
                    </div>
                    <Carousel.Caption className='caption'>
                        <p>
                            welcome to your car Dream
                            </p>                        
                        <h2 className='text-uppercase'>
                            some stunning car
                            </h2>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;