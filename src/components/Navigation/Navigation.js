import React from 'react';

const Navigation = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '20px' }}>
            <p className='f3 link dim black underlined pa3 pointer' style={{color: 'white'}}>Sign Out</p>
        </nav>
    );
};

export default Navigation;