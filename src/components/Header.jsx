import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid;
  height: 60px;

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90%;
    margin: auto;
  }

  h1 {
    font-size: 1.4em;
  }

  button {
    border: none;
    background-color: inherit;
    padding: 0;
    font-size: 1.4em;
  }
`

function Header(props) {
  return (
    <>
      <HeaderWrapper>
        <div className="header-content">
          <h1>Where in the World?</h1>
          {props.children}
        </div>
      </HeaderWrapper>
    </>

  );
}

export default Header;