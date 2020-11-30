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
export default HeaderWrapper;
/*.header-container, .header-content {
  display: flex;
  align-items: center;
}

.header-container {
  border-bottom: 2px solid;
  height: 60px;
}

.header-content {
  justify-content: space-between;

  width: 90%;
  margin: auto;
}

.header-container h1 {
  font-size: 1.4em;

}

.header-container button {
  border: none;
  background-color: inherit;
  padding: 0;
  font-size: 1.4em;
}*/