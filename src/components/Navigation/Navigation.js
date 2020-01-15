import React from 'react';

const Navigation = ({onRouteChange}) => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '20px' }}>
            <p onClick={() => onRouteChange('signin')} className='f3 link dim black underlined pa3 pointer' style={{color: 'white'}}>Sign Out</p>
        </nav>
    );
};

export default Navigation;