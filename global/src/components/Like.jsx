import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { flexCenter } from "../style/mixins";
import { colors } from "../style/variables";
import { IcLike } from "./common/icon";

const Like = ({ isLike }) => {
  const [likeActive, setLikeActive] = useState(isLike);

  return (
    <StyledButton
      onClick={() => setLikeActive((prev) => !prev)}
      isActive={likeActive}
    >
      <IcLike />
    </StyledButton>
  );
};

const likeScaleMotion = keyframes`
  0% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
`;

const StyledButton = styled.button`
  ${flexCenter};

  width: 40px;
  height: 40px;

  .opacity-heart-inner {
    transition: all 0.1s ease;
  }

  .opacity-heart-line use {
    transition: fill 0.1s ease;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      animation: ${likeScaleMotion} 0.5s ease;

      .opacity-heart-inner {
        opacity: 1;
        fill: ${colors.error};
      }

      .opacity-heart-line {
        display: none;
      }
    `}
`;

export default Like;
