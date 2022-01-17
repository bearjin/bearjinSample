import React, { useState } from 'react';
import styled from 'styled-components';
import AddNumberRoot from './AddNumberRoot';
import DisplayNumberRoot from './DisplayNumberRoot';

const StyledDiv = styled.div`
  div {
    padding: 20px;
    border: 5px solid #000;
  }

  > div:first-child {
    margin-bottom: 30px;
  }
`;

const ReduxNumber = () => {
  const [addNumber, setAddNumber] = useState(0);
  const handleClickButton = (number) => {
    setAddNumber(addNumber + Number(number));
  }
  return (
    <StyledDiv>
      <AddNumberRoot handleClickButton={handleClickButton} />
      <DisplayNumberRoot number={addNumber} />
    </StyledDiv>
  )
}

export default ReduxNumber;