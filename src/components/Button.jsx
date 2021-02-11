import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  border: none;
  padding: 15px 0;
  background-color: inherit;
  color: ${({ theme }) => theme.text};
  font-size: 1.2em;
  font-family: inherit;
`

function Button(props) {
  return (
    <ButtonWrapper onClick={props.onClick}>
        {props.children}
    </ButtonWrapper>
  );
}

export default Button;