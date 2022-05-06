import React from 'react';
import NotFoundImage from '../images/kindpng_2550720.png';
const NotFound = () => {
    return (
        <div className='w-100' style={{height:"100vh"}}>
            <img className="w-100" src={NotFoundImage} alt="" />
        </div>
    );
};

export default NotFound;