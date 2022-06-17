import React, { useState } from "react";
import styled from "styled-components";
import mixins from "../style/mixins";
import { colors } from "../style/variables";
import FilterJson from "../data/categoryFilter.json";

const FilterData = FilterJson.data;

const Filter = ({ category, handleChangeType }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <StyledFilterWrap>
      {FilterData[category].map(({ title }, index) => {
        const active = activeIndex === index;
        return (
          <StyledFilterButton
            key={index}
            active={active}
            onClick={() => {
              handleChangeType(title);
              setActiveIndex(index);
            }}
          >
            {title}
          </StyledFilterButton>
        );
      })}
    </StyledFilterWrap>
  );
};

const StyledFilterWrap = styled.section`
  ${mixins.overflowScroll};

  display: flex;

  &::before,
  &::after {
    flex: 0 0 15px;
    content: "";
  }
`;

const StyledFilterButton = styled.button`
  padding: 5px 10px;
  border: 1px solid
    ${({ active }) => (active ? `${colors.black}` : `${colors.gray500}`)};
  border-radius: 4px;
  color: ${({ active }) => (active ? `${colors.black}` : `${colors.gray500}`)};

  & + & {
    margin-left: 10px;
  }
`;

export default Filter;
