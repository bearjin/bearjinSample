import React from 'react';
import styled, { css } from 'styled-components';

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
  color: #fff;

  ${props => {
    if (props.type === 'isSale') {
      return css`background-color: #ed0060;`;
    }

    if (props.type === 'isExclusive') {
      return css`background-color: #18a286;`;
    }

    if (props.type === 'isSoldOut') {
      return css`background-color: #ccc;`;
    } 
  }}
`;

export default Label;