import React from 'react';
import styled, { css } from 'styled-components';
import mixins from '../style/mixins';
import { colors } from '../style/variables';

const Popup = ({ isActive, handleClickPopupClose }) => {
  return (
    <StyledWrap isActive={isActive}>
      <StyledInner isActive={isActive}>
        <StyledContent>
          팝업 테스트
          <StyledCloseButton onClick={() => handleClickPopupClose()}>닫기</StyledCloseButton>
        </StyledContent>
      </StyledInner>
    </StyledWrap>
  );
};

const StyledWrap = styled.section`
  ${mixins.fadeInAndOut};
  ${mixins.position('fixed', 0, 0, 0, 0)};

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const StyledInner = styled.div`
  ${mixins.position('absolute', 0, null, 0, 'calc(env(safe-area-inset-bottom) + 0px)')};

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
  padding: 20px;
  margin-top: 20px;
  background-color: ${colors.black};
  color: ${colors.white};
`;


export default Popup;