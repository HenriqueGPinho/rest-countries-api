import styled from "styled-components";

const GridWrapper = styled.div`
  width: 90%;
  margin: auto;

  @media(min-width: 480px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    grid-column-gap: 50px;
  }
`

export default GridWrapper;