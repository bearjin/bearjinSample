import React, { useState } from "react";
import styled from "styled-components";
import { mixinBlindScroll } from "../style/mixins";

const tabData = [
  {
    name: `Men's clothing`,
  },
  {
    name: `Women's clothing`,
  },
  {
    name: `Children's clothing`,
  },
  {
    name: `Shoes general`,
  },
  {
    name: `Shoes children`,
  },
];

const TypeTab = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <StyledTab role="tablist">
      {tabData.map(({ name }, index) => (
        <StyledButton
          key={index}
          type="button"
          aria-selected={index === activeIdx}
          isActive={index === activeIdx}
          onClick={() => setActiveIdx(index)}
        >
          {name}
        </StyledButton>
      ))}
    </StyledTab>
  );
};

export default TypeTab;

const StyledTab = styled.div`
  display: flex;
  overflow-x: auto;
  margin-top: 100px;
  white-space: nowrap;

  ${mixinBlindScroll};

  &::before,
  &::after {
    display: flex;
    flex: 0 0 15px;
    content: "";
  }
`;

const StyledButton = styled.button`
  height: 32px;
  padding: 0 12px;
  border-radius: 4px;
  background-color: #f5f6f7;
  color: #626972;

  ${({ isActive }) =>
    isActive &&
    `
    background-color: #0a0f18;
    color: #fff;
  `}

  & + & {
    margin-left: 8px;
  }
`;
