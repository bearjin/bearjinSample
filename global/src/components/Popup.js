import React from 'react';
import styled, { css } from 'styled-components';
import mixins from '../style/mixins';
import { colors } from '../style/variables';

const Popup = ({ isActive, handleClickPopupClose }) => {
  return (
    <StyledWrap>
      <StyledDim isActive={isActive} onClick={() => handleClickPopupClose()} />
      <StyledInner isActive={isActive}>
        <StyledContent>
          팝업 테스트
        </StyledContent>
        <StyledCloseButton onClick={() => handleClickPopupClose()}>닫기</StyledCloseButton>
      </StyledInner>
    </StyledWrap>
  );
};

const StyledWrap = styled.section`
  position: relative;
  z-index: 9999;
`;

const StyledDim = styled.div`
  ${mixins.position('fixed', 0, 0, 0, 0)};
  ${({ isActive }) => isActive ? css`display: block;` : css`display: none;`};
  
  background-color: rgba(0, 0, 0, .4);
`;

const StyledInner = styled.div`
  ${mixins.position('fixed', 0, null, 0, 'calc(env(safe-area-inset-bottom) + 0px)')};

  padding-bottom: calc(env(safe-area-inset-bottom) + 0px);
  border-radius: 30px 30px 0 0;
  background-color: ${colors.white};
  transition: transform .25s ease-in-out 0s;
  transform: translateY(100%);

  ${({ isActive }) => isActive && css`
    transform: translateY(0);
  `}

  &::before {
    ${mixins.position('absolute', '50%', '15px')};

    width: 60px;
    height: 4px;
    border-radius: 2px;
    background-color: ${colors.gray300};
    transform: translateX(-50%);
    content: '';
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 30px;
  font-size: 30px;
`;

const StyledCloseButton = styled.button`
  ${mixins.position('absolute', 0, 0)};

  width: 100%;
  height: 30px;
  font-size: 0;
`;


export default Popup;