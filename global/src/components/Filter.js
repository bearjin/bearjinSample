import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import mixins from '../style/mixins';
import { colors } from '../style/variables';
import FilterJson from '../data/categoryFilter.json';

const FilterData = FilterJson.data;

const Filter = ({ category, handleClickType, handleClickCount }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClickActive = (index) => setActiveIndex(index);

  return (
    <StyledFilterWrap>
      {FilterData[category].map(({ title }, index) => {
        const active = activeIndex === index;
        return (
          <StyledFilterButton key={index} active={active} onClick={() => {
            handleClickType(title);
            handleClickActive(index);
            handleClickCount();
          }}>
            {title}
          </StyledFilterButton>
        )
      })}
    </StyledFilterWrap>
  );
};

const StyledFilterWrap = styled.section`
  ${mixins.overflowScroll};

  display: flex;

  &::before,
  ::after {
    flex: 0 0 15px;
    content: '';
  }
`;

const StyledFilterButton = styled.button`
  padding: 5px 10px;
  border: 1px solid ${colors.gray500};
  border-radius: 4px;
  color: ${colors.gray500};

  ${({ active }) => active && css`
    border-color: ${colors.black};
    color: ${colors.black};
  `};

  & + & {
    margin-left: 10px;
  }
`;

export default Filter;