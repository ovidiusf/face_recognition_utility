import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: '20px'
        }}
      >
        <p
          onClick={() => onRouteChange('signout')}
          className='f3 link dim black underlined pa3 pointer'
          style={{ color: 'white' }}
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: '20px'
        }}
      >
        <p
          onClick={() => onRouteChange('signin')}
          className='f3 link dim black underlined pa3 pointer'
          style={{ color: 'white' }}
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange('register')}
          className='f3 link dim black underlined pa3 pointer'
          style={{ color: 'white' }}
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
