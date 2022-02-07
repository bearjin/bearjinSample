import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import mixins from '../style/mixins';
import { IcLike } from './common/icon';

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
    transition: all .1s ease
  }

  .opacity-heart-line use {
    transition: fill .1s ease
  }

  &.isActive {
    animation: ${productLikeActive} .5s ease;
    
    .opacity-heart-inner {
      opacity: 1;
      fill: red;
    }

    .opacity-heart-line {
      display: none;
    }
  }
`;

const Like = ({ isLike }) => {
  const [likeActive, setLikeActive] = useState(isLike);

  const handleClickLike = (e) => {
    const { currentTarget } = e;

    if (currentTarget.classList.contains('isActive')) {
      setLikeActive(false);
    } else {
      setLikeActive(true);
    }
  }

  return (
    <StyledButton className={likeActive ? 'isActive' : ''} onClick={handleClickLike}>
      <IcLike />
    </StyledButton>
  );
};

export default Like;