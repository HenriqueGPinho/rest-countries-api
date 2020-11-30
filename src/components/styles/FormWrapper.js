import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  margin: auto;

  input, select {
    padding: 15px 0;
    margin: 20px 0;
  }
  
  input {
    box-sizing: border-box;
  }
  
  @media(min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    
    input {
      width: 300px;
    }
  }
`

export default FormWrapper;