import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import face_image from './face-detect.png';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 125, width: 125 }} >
                <div className='Tilt-inner pa2'>
                    <img style={{paddingTop: '5px'}} alt='logo' src={face_image}/>
                </div>
            </Tilt>
        </div>
    );
};

export default Logo;