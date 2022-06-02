import React from "react";
import styled from "styled-components";

const Layer = () => {
  return (
    <StyledLayer>
      <StyledLayerContent>
        <StyledLayerContentItem />
        <StyledLayerContentItem />
        <StyledLayerContentItem />
        <StyledLayerContentItem />
      </StyledLayerContent>
      <StyledProgress>
        <StyledProgressItem>
          <StyledProgressBar />
        </StyledProgressItem>
        <StyledProgressItem>
          <StyledProgressBar />
        </StyledProgressItem>
        <StyledProgressItem>
          <StyledProgressBar />
        </StyledProgressItem>
        <StyledProgressItem>
          <StyledProgressBar />
        </StyledProgressItem>
      </StyledProgress>
      <StyledNextButton>NEXT</StyledNextButton>
    </StyledLayer>
  );
};

export default Layer;

const StyledLayer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
`;

const StyledLayerContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledLayerContentItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:nth-child(1) {
    background-color: wheat;
    z-index: 5;
  }

  &:nth-child(2) {
    background-color: darkblue;
    z-index: 4;
  }

  &:nth-child(3) {
    background-color: darkcyan;
    z-index: 3;
  }

  &:nth-child(4) {
    background-color: palevioletred;
    z-index: 2;
  }
`;

const StyledProgress = styled.ul`
  display: flex;
  position: absolute;
  bottom: 50px;
  left: 0;
  z-index: 10;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;

const StyledProgressItem = styled.li`
  position: relative;
  flex: 1;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.3);

  & + & {
    margin-left: 10px;
  }
`;

const StyledProgressBar = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #fff;
`;

const StyledNextButton = styled.button`
  position: absolute;
  right: 30px;
  bottom: 100px;
  z-index: 10;
  font-weight: bold;
  font-size: 20px;
`;
