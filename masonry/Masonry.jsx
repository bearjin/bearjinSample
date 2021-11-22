import React, { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import masonryData from './masonryData';

const StyledMasonry = styled.ul`
  column-count: 4;
  column-gap: 1em;
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(.4) translate3d(80px, 100px, -300px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translate3d(0, 0, 0);
  }
`;

const StyledItem = styled.li`
  display: inline-block;
  width: 100%;
  padding: 1em;
  margin: 0 0 1.5em;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 2px 2px 4px 0 #ccc;
  list-style: none;
  opacity: 0;
  animation: ${FadeIn} 3s forwards;

  > img {
    width: 100%;
  }
`;

const Masonry = () => {
  const itemList = useRef();
  const addDelayItem = () => {
    const items = itemList.current.querySelectorAll('li');
    const maxAnimationDelay = 3;
  
    items.forEach((item) => {
      item.style = `animation-delay: ${getRandomInt(0, 10) * maxAnimationDelay / 10}s`;
    });
  }

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  }

  useEffect(() => {
    addDelayItem();
  });

  return (
    <StyledMasonry ref={itemList}>
      {
        masonryData.map((item, index) => {
          return (
            <StyledItem key={index}>
              <img src={require(`./images/${item.imgUrl}.jpg`).default} alt={item.altText} />
            </StyledItem>
          )
        })
      }
    </StyledMasonry>
  )
}

export default Masonry;