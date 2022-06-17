import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import mixins from "../style/mixins";
import { colors } from "../style/variables";
import { IcLike } from "./common/icon";

const Like = ({ isLike }) => {
  const [likeActive, setLikeActive] = useState(isLike);

  const handleClickLike = (e) => {
    const { currentTarget } = e;

    if (currentTarget.classList.contains("isActive")) {
      setLikeActive(false);
    } else {
      setLikeActive(true);
    }
  };

  return (
    <StyledButton
      className={likeActive ? "isActive" : ""}
      onClick={handleClickLike}
    >
      <IcLike />
    </StyledButton>
  );
};

const productLikeActive = keyframes`
  0% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
`;

const StyledButton = styled.button`
  ${mixins.flexCenter};

  width: 40px;
  height: 40px;

  .opacity-heart-inner {
    transition: all 0.1s ease;
  }

  .opacity-heart-line use {
    transition: fill 0.1s ease;
  }

  &.isActive {
    animation: ${productLikeActive} 0.5s ease;

    .opacity-heart-inner {
      opacity: 1;
      fill: ${colors.error};
    }

    .opacity-heart-line {
      display: none;
    }
  }
`;

export default Like;
