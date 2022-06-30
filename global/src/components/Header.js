import React, { useState } from "react";
import styled, { css } from "styled-components";
import { position } from "../style/mixins";
import { colors } from "../style/variables";
import { IcNotice, IcSearch, IcShoppingBag } from "./common/icon";

const Header = ({ handleActivePopup }) => {
  const [noticeActive, setNoticeActive] = useState(false);
  const [shoppingCount, setShoppingCount] = useState(0);

  return (
    <StyledHeader>
      <StyldHeaderBox>
        <StyledHeaderNoticeButton
          type="button"
          isActive={noticeActive}
          onClick={() => setNoticeActive(!noticeActive)}
        >
          <IcNotice />
        </StyledHeaderNoticeButton>
      </StyldHeaderBox>
      <StyledLogoA href="#">로고</StyledLogoA>
      <StyldHeaderBox>
        <StyledHeaderButton
          type="button"
          onClick={() => handleActivePopup(true)}
        >
          <IcSearch />
        </StyledHeaderButton>
        <StyledHeaderButton
          type="button"
          onClick={() => setShoppingCount((prev) => (prev < 10 ? ++prev : 0))}
        >
          <IcShoppingBag />
          {!!shoppingCount && (
            <StyledHeaderShoppingCountSpan>
              {shoppingCount}
            </StyledHeaderShoppingCountSpan>
          )}
        </StyledHeaderButton>
      </StyldHeaderBox>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  ${position("sticky", null, 0, null, null)};

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

const StyledHeaderButton = styled.button`
  display: inline-flex;
  position: relative;

  & + & {
    margin-left: 5px;
  }
`;

const StyledHeaderNoticeButton = styled(StyledHeaderButton)`
  ${({ isActive }) =>
    isActive &&
    css`
      &::before {
        ${position("absolute", null, 0, null, 0)};

        width: 5px;
        height: 5px;
        border-radius: 100%;
        background-color: rgba(0, 120, 255);
        content: "";
      }
    `}
`;

const StyledHeaderShoppingCountSpan = styled.span`
  ${position("absolute", null, null, "-4px", "-4px")};

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
