import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import {
  IcNotice,
  IcSearch,
  IcShoppingBag,
} from './common/icon';

const Header = () => {
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
        <StyledHeaderNoticeA href="#" isActive={noticeActive} onClick={handleNoticeActive}>
          <IcNotice />
        </StyledHeaderNoticeA>
      </StyldHeaderBox>
      <StyledLogoA href="#">로고</StyledLogoA>
      <StyldHeaderBox>
        <StyledHeaderLinkA href="#">
          <IcSearch />
        </StyledHeaderLinkA>
        <StyledHeaderLinkA href="#" onClick={handleShoppingCount}>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #fff;
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
  ${props => {
    if (props.isActive) {
      return css`
        &::before {
          position: absolute;
          top: 0;
          right: 0;
          width: 5px;
          height: 5px;
          border-radius: 100%;
          background-color: rgba(0, 120, 255);
          content: '';
        }
      `
    }
  }}
`;

const StyledHeaderShoppingCountSpan = styled.span`
  display: inline-flex;
  justify-content: center;
  position: absolute;
  right: -4px;
  bottom: -4px;
  min-width: 20px;
  height: 20px;
  padding: 5px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: rgba(0, 120, 255);
  line-height: 1;
  color: #fff;
`;

export default Header;