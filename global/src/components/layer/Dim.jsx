import React from 'react';
import styled from 'styled-components';

const Dim = ({ isLayerHidden }) => {
  return (
    <StyledDim isLayerHidden={isLayerHidden} />
  );
};

const StyledDim = styled.div`
  display: ${({ isLayerHidden }) => isLayerHidden ? 'none': 'block'};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(10, 15, 24, 0.4);
  z-index: 100;
`;

export default Dim;