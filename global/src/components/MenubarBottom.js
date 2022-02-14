import React from 'react';
import styled from 'styled-components';
import mixins from '../style/mixins';
import { colors } from '../style/variables';
import { 
  IcMenubarSearch, 
  IcMenubarBrand,
  IcMenubarLogo, 
  IcMenubarLike, 
  IcMenubarProfile,
} from './common/icon';

const MenubarBottom = () => {
  return (
    <StyledMenuNav>
      <StyledMenuLinkA href="#">
        <IcMenubarSearch />
        메뉴 검색
      </StyledMenuLinkA>
      <StyledMenuLinkA>
        <IcMenubarBrand />
        브랜드
      </StyledMenuLinkA>
      <StyledMenuLinkA>
        <IcMenubarLogo />
      </StyledMenuLinkA>
      <StyledMenuLinkA>
        <IcMenubarLike />
        좋아요
      </StyledMenuLinkA>
      <StyledMenuLinkA>
        <StyledProfileIconSpan>
          <IcMenubarProfile />
        </StyledProfileIconSpan>
        마이
      </StyledMenuLinkA>
    </StyledMenuNav>
  );
};

const StyledMenuNav = styled.nav`
  ${mixins.position('sticky', null, null, 0, null)};

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
  background-color: ${colors.black};
`;

const StyledMenuLinkA = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  line-height: 17px;
  color: ${colors.white};
`;

const StyledProfileIconSpan =  styled.span`
  ${mixins.flexCenter};

  width: 24px;
  height: 24px;
  margin: 2px 0 4px;
  border-radius: 100%;
  background-color: gray;
`;

export default MenubarBottom;