import React from 'react';
import styled, { css } from 'styled-components';
import mixins from '../style/mixins';
import variables from '../style/variables';
import Like from './Like';
import Label from './Label';
import GoodsData from '../data/goods.json';

const listData = GoodsData.data.list;

const ProductList = () => {
  return (
    <StyledWrapSection>
      <StyledListUl>
        {listData.map(({ goodsNo, goodsName, price, brandName, imageUrl, normalPrice, isSale, saleRate, linkUrl, brandLinkUrl, isSoldOut, isExclusive, isLike }, index) => (
          <StyledListLi key={goodsNo}>
            <StyledThumnailDiv>
              <StyledImageLinkA href={linkUrl} >
                <StyledImageBoxDiv isSoldOut={isSoldOut}>
                  <img src={imageUrl} alt={goodsName} />
                </StyledImageBoxDiv>
                <StyledProductNumberSpan index={index}>
                  {index + 1}
                </StyledProductNumberSpan>
                {(isSale || isExclusive || isSoldOut) && (
                  <StyledProductLabelWrapDiv>
                    {isSale && <Label type={'isSale'} text={'설날 세일'} />}
                    {isExclusive && <Label type={'isExclusive'} text={'무신사 단독'} />}
                    {isSoldOut && <Label type={'isSoldOut'} text={'SOLD OUT'} />}
                  </StyledProductLabelWrapDiv>
                )}
              </StyledImageLinkA>
              <StyledLikeDiv>
                <Like isLike={isLike} />
              </StyledLikeDiv>
            </StyledThumnailDiv>
            <StyledInformationA href={brandLinkUrl}>
              <StyledNameP>
                {brandName}
              </StyledNameP>
              <StyledNameP strong>
                {goodsName}
              </StyledNameP>
              <StyledPriceP>
                <span>
                  {isSale && <del>{normalPrice}원</del>}
                  {price}원
                </span>
                {isSale && (
                  <StyledSaleRateSpan>
                    {saleRate}%
                  </StyledSaleRateSpan>
                )}
              </StyledPriceP>
            </StyledInformationA>
          </StyledListLi>
        ))}
      </StyledListUl>
    </StyledWrapSection>
  );
};

const StyledWrapSection = styled.section`
  padding: 15px;
`;

const StyledListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;

  ${variables.mediaTablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${variables.mediaDesktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

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
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;  
`;

const StyledImageBoxDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  transform: translate(-50%, -50%);

  img {
    width: 100%;
  }

  ${props => props.isSoldOut && css`
    &::after {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(255, 255, 255, .8);
      content: '';
    }
  `}
`;

const StyledProductNumberSpan = styled.span`
  ${mixins.flexCenter};

  position: absolute;
  left: 0;
  top: 0;
  width: 30px;
  height: 30px;
  color: #fff;

  ${props => props.index < 2 ? css`background-color: #000;` : css`background-color: #aaa;`}
`;

const StyledProductLabelWrapDiv = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
`;

const StyledInformationA = styled.a`
  display: block;
`;

const StyledNameP = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & + & {
    margin-top: 10px;
  }

  ${props => props.strong && css`font-weight: bold;`}
`;

const StyledPriceP = styled.p`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  del {
    margin-right: 10px;
    font-weight: bold;
    color: red;
  }
`;

const StyledSaleRateSpan = styled.span`
  font-weight: bold;
  color: red;
`;

const StyledLikeDiv = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;
`;

export default ProductList;