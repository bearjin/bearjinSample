import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../style/variables';

const Label = ({ type, text }) => {
  return (
    <StyledProductLabelSpan type={type}>
      {text}
    </StyledProductLabelSpan>
  );
};

const StyledProductLabelSpan = styled.span`
  display: inline-flex;
  padding: 5px;
  color: ${colors.white};

  ${({type}) => {
    if (type === 'isSale') {
      return css`background-color: #ed0060;`;
    } else if (type === 'isExclusive') {
      return css`background-color: #18a286;`;
    } else {
      return css`background-color: #ccc;`;
    }
  }}
`;

export default Label;