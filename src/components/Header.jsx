import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow};
  height: 6em;
  background-color: ${({ theme }) => theme.elements};

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90%;
    max-width: 1440px;
    margin: auto;
  }

  h1 {
    font-size: 1.6em;
  }
`

function Header(props) {
  return (
    <>
      <HeaderWrapper>
        <div className="header-content">
          <h1>Where in the world?</h1>
          {props.children}
        </div>
      </HeaderWrapper>
    </>

  );
}

export default Header;