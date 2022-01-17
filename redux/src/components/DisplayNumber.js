import React from 'react';
import styled from 'styled-components';

const StyledDisplayNumber = styled.p`
  font-size: 30px;
`;

const DisplayNumber = ({ number }) => {  
  return (
    <div>
      <StyledDisplayNumber>
        {number}
      </StyledDisplayNumber>
    </div>
  );
};

export default DisplayNumber;