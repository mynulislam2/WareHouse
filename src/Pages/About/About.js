import React from 'react';
import AboutCount from '../../Components/AboutCount/AboutCount';
import AboutusDescription from '../../Components/AboutusDescription/AboutusDescription';
import Fotter from '../../Components/Fotter/Fotter';
import GoogleMap from '../../Components/GoogleMap/GoogleMap';
import './about.css';
const About = () => {
    return (
        <div className='aboutBanner '>
            <div className="aboutBanner d-flex justify-content-center  align-items-center">
                <h2 className='
          text-light  title text-uppercase'> about us</h2>
            </div>

<AboutusDescription></AboutusDescription>
<AboutCount></AboutCount>
<GoogleMap></GoogleMap>
<Fotter></Fotter>
        </div>

    );
};

export default About;