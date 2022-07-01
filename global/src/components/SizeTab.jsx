import React, { useState } from "react";
import styled from "styled-components";

const tabData = [
  {
    name: "Actual",
  },
  {
    name: "Reference",
  },
];

const SizeTab = () => {
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

export default SizeTab;

const StyledTab = styled.div`
  display: flex;
  background-color: #f3f3f3;
`;

const StyledButton = styled.button`
  flex: 1;
  height: 40px;
  border-radius: 4px;
  background-color: #f8f9fa;
  color: #a3a9b3;

  ${({ isActive }) =>
    isActive &&
    `
    border: 1px solid #e5e5e5;
    background-color: #fff;
    color: #000;
  `}
`;
