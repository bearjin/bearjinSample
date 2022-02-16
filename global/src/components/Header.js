import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import mixins from '../style/mixins';
import { colors } from '../style/variables'; 
import {
  IcNotice,
  IcSearch,
  IcShoppingBag,
} from './common/icon';

const Header = ({ handleClickPopupOpen }) => {
  const [noticeActive, setNoticeActive] = useState(false);
  const [shoppingCount, setShoppingCount] = useState(0);

  const handleNoticeActive = () => {
    noticeActive ? setNoticeActive(false) : setNoticeActive(true);
  }

  const handleShoppingCount = () => {
    shoppingCount < 10 ? setShoppingCount(shoppingCount + 1) : setShoppingCount(0);
  }

  return (
    <StyledHeader>
      <StyldHeaderBox>
        <StyledHeaderNoticeA href="#" isActive={noticeActive} onClick={() => handleNoticeActive()}>
          <IcNotice />
        </StyledHeaderNoticeA>
      </StyldHeaderBox>
      <StyledLogoA href="#">로고</StyledLogoA>
      <StyldHeaderBox>
        <StyledHeaderLinkA href="#" onClick={() => handleClickPopupOpen()}>
          <IcSearch />
        </StyledHeaderLinkA>
        <StyledHeaderLinkA href="#" onClick={() => handleShoppingCount()}>
          <IcShoppingBag />
          {shoppingCount > 0 && (
            <StyledHeaderShoppingCountSpan>
              {shoppingCount}
            </StyledHeaderShoppingCountSpan>
          )}
        </StyledHeaderLinkA>
      </StyldHeaderBox>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  ${mixins.position('sticky', null, 0, null, null)};

  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;
  background-color: ${colors.white};
`;

const StyledLogoA = styled.a``;

const StyldHeaderBox = styled.div``;

const StyledHeaderLinkA = styled.a`
  display: inline-flex;
  position: relative;

  & + & {
    margin-left: 5px;
  }
`;

const StyledHeaderNoticeA = styled(StyledHeaderLinkA)`
  ${({isActive}) => isActive && css`
    &::before {
      ${mixins.position('absolute', null, 0, null, 0)};

      width: 5px;
      height: 5px;
      border-radius: 100%;
      background-color: rgba(0, 120, 255);
      content: '';
    }
  `}
`;

const StyledHeaderShoppingCountSpan = styled.span`
  ${mixins.position('absolute', null, null, '-4px', '-4px')};

  display: inline-flex;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 5px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: rgba(0, 120, 255);
  line-height: 1;
  color: ${colors.white};
`;

export default Header;