import React from 'react';
import styled, { css } from 'styled-components';
import mixins from '../style/mixins';
import { mediaQuery, colors} from '../style/variables';
import Like from './Like';
import Label from './Label';
import GoodsData from '../data/goods.json';

const listData = GoodsData.data.list;

const ProductList = ({ filterType }) => {
  return (
    <StyledWrapSection>
      <StyledListUl>
        {listData.map(({ goodsNo, goodsName, price, brandName, imageUrl, normalPrice, isSale, saleRate, linkUrl, brandLinkUrl, isSoldOut, isExclusive, isLike, type }, index) => {
          return (
            (filterType === '전체' || filterType === type) ? (
              <StyledListLi key={goodsNo + index}>
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
            ) : null
          )
        })}
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

  ${mediaQuery.mediaTablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQuery.mediaDesktop} {
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
  ${mixins.position('absolute', 0, 0)};
  
  width: 100%;
  height: 100%;  
`;

const StyledImageBoxDiv = styled.div`  
  width: 100%;
  height: 100%;

  img {
    ${mixins.position('absolute', '50%', '50%')};

    width: 100%;
    transform: translate(-50%, -50%);
  }

  ${({isSoldOut}) => isSoldOut && css`
    &::after {
      ${mixins.position('absolute', 0, 0, 0, 0)};

      background-color: rgba(255, 255, 255, .8);
      content: '';
    }
  `}
`;

const StyledProductNumberSpan = styled.span`
  ${mixins.flexCenter};
  ${mixins.position('absolute', 0, 0)};

  width: 30px;
  height: 30px;
  color: ${colors.white};

  ${({index}) => index < 2 ? css`background-color: ${colors.black}` : css`background-color: #aaa;`}
`;

const StyledProductLabelWrapDiv = styled.div`
  ${mixins.position('absolute', 0, null, 0, null)};
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

  ${({strong}) => strong && `font-weight: bold;`}
`;

const StyledPriceP = styled.p`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  del {
    margin-right: 10px;
    font-weight: bold;
    color: ${colors.error};
  }
`;

const StyledSaleRateSpan = styled.span`
  font-weight: bold;
  color: ${colors.error};
`;

const StyledLikeDiv = styled.div`
  ${mixins.position('absolute', null, null, '15px', '15px')};
`;

export default ProductList;