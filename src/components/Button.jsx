import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  border: none;
  background-color: inherit;
  font-size: 1.4em;
`

function Button(props) {
  return (
    <ButtonWrapper onClick={props.onClick}>
        {props.children}
    </ButtonWrapper>
  );
}

export default Button;