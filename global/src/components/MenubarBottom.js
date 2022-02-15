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
    <StyledMenuNavWrap>
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
    </StyledMenuNavWrap>
  );
};

const StyledMenuNavWrap = styled.div`
  position: relative;
  height: calc(env(safe-area-inset-bottom) + 60px);
`;

const StyledMenuNav = styled.nav`
  ${mixins.position('fixed', 0, null, 0, null)};

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding-bottom: calc(env(safe-area-inset-bottom));
  box-sizing: border-box;
  background-color: ${colors.black};
`;

const StyledMenuLinkA = styled.a`
  ${mixins.flexCenter};

  flex: 1;
  flex-direction: column;
  height: 60px;
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
  background-color: ${colors.gray300};
`;

export default MenubarBottom;