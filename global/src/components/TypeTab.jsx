import React, { useState } from "react";
import styled from "styled-components";
import { mixinBlindScroll } from "../style/mixins";

const tabData = [
  {
    name: `Men's clothing`,
    type: "men-clothes",
  },
  {
    name: `Women's clothing`,
    type: "women-clothes",
  },
  {
    name: `Children's clothing`,
    type: "kids-clothes",
  },
  {
    name: `Shoes general`,
    type: "general-shoes",
  },
  {
    name: `Shoes children`,
    type: "kids-shoes",
  },
];

const TypeTab = ({ handleActiveType }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <StyledTab role="tablist">
      {tabData.map(({ name, type }, index) => (
        <StyledButton
          key={index}
          type="button"
          aria-selected={index === activeIdx}
          isActive={index === activeIdx}
          onClick={() => {
            setActiveIdx(index);
            handleActiveType(type);
          }}
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
