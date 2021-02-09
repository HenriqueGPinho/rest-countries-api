import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  border: none;
  background-color: inherit;
  padding: 0;
  font-size: 1.4em;
`

function Button(props) {
  return (
    <ButtonWrapper>
      {props.children}
    </ButtonWrapper>
  );
}

export default Button;