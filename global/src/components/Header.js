import React from 'react';
import styled from 'styled-components';
import {
  IcNotice,
  IcSearch,
  IcShoppingBag,
} from './common/icon';

const Header = () => {
  return (
    <StyledHeader>
      <StyldHeaderBox>
        <StyledHeaderLinkA href="#">
          <IcNotice />
        </StyledHeaderLinkA>
      </StyldHeaderBox>
      <StyledLogoA href="#">로고</StyledLogoA>
      <StyldHeaderBox>
        <StyledHeaderLinkA href="#">
          <IcSearch />
        </StyledHeaderLinkA>
        <StyledHeaderLinkA href="#">
          <IcShoppingBag />
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

  & + & {
    margin-left: 5px;
  }
`;

export default Header;