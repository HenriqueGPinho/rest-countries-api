import React from 'react';
import HeaderWrapper from './styles/HeaderWrapper.js';


function Header() {


  return (
    <>
      <HeaderWrapper>
        <div className="header-content">
          <h1>Where in the World?</h1>
          <button>Dark Mode</button>
        </div>
      </HeaderWrapper>
    </>

  );
}

export default Header;