import React from "react";
import styled, { css } from "styled-components";
import { position, flexCenter, textOverflow } from "../../style/mixins";
import { colors } from "../../style/variables";
import Like from "../Like";
import Label from "../Label";

const numberCommas = (number) => {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

const ProductListItem = ({
  goodsNo,
  goodsName,
  price,
  brandName,
  imageUrl,
  normalPrice,
  isSale,
  isExclusive,
  isSoldOut,
  saleRate,
  linkUrl,
  brandLinkUrl,
  isLike,
  type,
  idx,
}) => {
  const LabelShow = isSale || isExclusive || isSoldOut;

  return (
    <StyledListLi>
      <StyledThumnailDiv>
        <StyledImageLinkA href={linkUrl}>
          <StyledImageBoxDiv isSoldOut={isSoldOut}>
            <img src={imageUrl} alt={goodsName} />
          </StyledImageBoxDiv>
          <StyledProductNumberSpan index={idx}>{idx}</StyledProductNumberSpan>
          {LabelShow && (
            <StyledProductLabelWrapDiv>
              {isSale && <Label type={"isSale"} text={"설날 세일"} />}
              {isExclusive && (
                <Label type={"isExclusive"} text={"무신사 단독"} />
              )}
              {isSoldOut && <Label type={"isSoldOut"} text={"SOLD OUT"} />}
            </StyledProductLabelWrapDiv>
          )}
        </StyledImageLinkA>
        <StyledLikeDiv>
          <Like isLike={isLike} />
        </StyledLikeDiv>
      </StyledThumnailDiv>
      <StyledInformationA href={brandLinkUrl}>
        <StyledNameP>{brandName}</StyledNameP>
        <StyledNameP strong>{goodsName}</StyledNameP>
        <StyledPriceP>
          {isSale && <StyledSaleRateSpan>{saleRate}%</StyledSaleRateSpan>}
          {numberCommas(price)}원
          {isSale && <del>{numberCommas(normalPrice)}원</del>}
        </StyledPriceP>
      </StyledInformationA>
    </StyledListLi>
  );
};

const StyledListLi = styled.li`
  min-width: 0;
  max-width: 100%;
`;

const StyledThumnailDiv = styled.div`
  overflow: hidden;
  position: relative;
  padding-bottom: 120%;
  margin-bottom: 20px;
`;

const StyledImageLinkA = styled.a`
  ${position("absolute", 0, 0)};

  width: 100%;
  height: 100%;
`;

const StyledImageBoxDiv = styled.div`
  width: 100%;
  height: 100%;

  img {
    ${position("absolute", "50%", "50%")};

    width: 100%;
    transform: translate(-50%, -50%);
  }

  ${({ isSoldOut }) =>
    isSoldOut &&
    css`
      &::after {
        ${position("absolute", 0, 0, 0, 0)};

        background-color: rgba(255, 255, 255, 0.8);
        content: "";
      }
    `}
`;

const StyledProductNumberSpan = styled.span`
  ${flexCenter};
  ${position("absolute", 0, 0)};

  width: 30px;
  height: 30px;
  background-color: ${({ index }) => (index <= 2 ? `${colors.black}` : "#aaa")};
  color: ${colors.white};
`;

const StyledProductLabelWrapDiv = styled.div`
  ${position("absolute", 0, null, 0, null)};
`;

const StyledInformationA = styled.a`
  display: block;
`;

const StyledNameP = styled.p`
  ${textOverflow};

  font-weight: ${({ strong }) => strong && "bold;"};

  & + & {
    margin-top: 10px;
  }
`;

const StyledPriceP = styled.p`
  position: relative;
  padding-top: 30px;

  del {
    ${position("absolute", 0, "10px")};

    font-weight: bold;
    font-size: 12px;
    color: ${colors.gray300};
  }
`;

const StyledSaleRateSpan = styled.span`
  margin-right: 20px;
  font-weight: bold;
  color: ${colors.error};
`;

const StyledLikeDiv = styled.div`
  ${position("absolute", null, null, "15px", "15px")};
`;

export default ProductListItem;
