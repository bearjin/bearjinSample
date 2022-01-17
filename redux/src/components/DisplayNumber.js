import React from 'react';
import styled from 'styled-components';

const StyledDisplayNumber = styled.p`
  font-size: 30px;
`;

const DisplayNumber = () => {
  return (
    <div>
      <StyledDisplayNumber>
        0
      </StyledDisplayNumber>
    </div>
  );
};

export default DisplayNumber;