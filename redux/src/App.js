import React from 'react';
import styled from 'styled-components';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

const StyledDiv = styled.div`
  div {
    padding: 20px;
    border: 5px solid #000;
  }

  > div {
    &:first-child {
      margin-bottom: 30px;
    }
  }
`;

const App = () => (
  <StyledDiv>
    <AddNumberRoot />
    <DisplayNumberRoot />
  </StyledDiv>
)

export default App
