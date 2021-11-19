import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const StyledRolling = styled.div`
  overflow: hidden;
  height: 30px;
  padding: 0 15px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`;

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
  transition: all .5s ease-in;
`;

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  height: 30px;
  list-style: none;

  &:last-child {
    margin-bottom: 0;
  }

  &::after {
    position: absolute;
    right: 15px;
    top: 50%;
    width: 5px;
    height: 1px;
    background-color: #000;
    transform: translateY(-50%);
    content: '';
  }

  &.up {
    &::after {
      display: inline-block;
      width: 0;
      height: 0;
      border-right: 4px solid transparent;
      border-bottom: 4px solid red;
      border-left: 4px solid transparent;
      background-color: transparent;
      content: '';
    }
  }

  &.down {
    &::after {
      display: inline-block;
      width: 0;
      height: 0;
      border-top: 4px solid #0078ff;
      border-right: 4px solid transparent;
      border-left: 4px solid transparent;
      background-color: transparent;
      content: '';
    }
  }

  > span:first-child {
    flex: 0 0 30px;
  }
`;

const menuData = [
  {
    name: '숏패딩',
    ranking: 'equal',
  },
  {
    name: '후드티',
    ranking: 'up',
  },
  {
    name: '맨투맨',
    ranking: 'down',
  },
  {
    name: '니트',
    ranking: 'equal',
  },
  {
    name: '비니',
    ranking: 'equal',
  },
  {
    name: '코트',
    ranking: 'up',
  },
  {
    name: '후리스',
    ranking: 'up',
  },
  {
    name: '조거팬츠',
    ranking: 'down',
  },
  {
    name: '패딩',
    ranking: 'equal',
  },
  {
    name: '머플러',
    ranking: 'down',
  },
]

const rollingMenu = () => {
  const rollingTarget = useRef();

  const rollingAnimation = () => {
    const target = rollingTarget.current;
    const targetItem = target.querySelector('li');
    const itemHeight = targetItem.getBoundingClientRect().height;
    const maxMove = target.getBoundingClientRect().height;
    let move = 0;
    let timing;

    const ani = () => {
      move += itemHeight;
      target.setAttribute('style', `transform: translateY(-${move}px)`);
      
      if (move >= maxMove) {
        clearInterval(timing);
        target.setAttribute('style', `transform: translateY(0); transition: none;`);
        move = 0;
        timing = setInterval(ani, 1000);
      }
    }
    timing = setInterval(ani, 1000);
  }

  useEffect(() => {
    rollingAnimation();
  });

  return (
    <StyledRolling>
      <StyledList ref={rollingTarget}>
        {
          menuData.map((item, index) => {
            return (
              <StyledItem key={index} className={item.ranking}>
                <span>{index + 1}</span>
                <span>{item.name}</span>
              </StyledItem>
            )
          })
        }
        {
          <StyledItem className={menuData[0].ranking}>
            <span>1</span>
            <span>{menuData[0].name}</span>
          </StyledItem>
        }
      </StyledList>
  </StyledRolling>
  );
};

export default rollingMenu;