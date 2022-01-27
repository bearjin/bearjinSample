import React from 'react';
import styled, { css } from 'styled-components';
import variables from '../style/variables';
import GoodsData from '../data/goods.json';

const listData = GoodsData.data.list;

const ProductList = () => {
  return (
    <StyledWrapSection>
      <StyledListUl>
        {listData.map(({ goodsNo, goodsName, price, brandName, imageUrl, normalPrice, saleRate, linkUrl, brandLinkUrl }, index) => (
          <StyledListLi key={goodsNo}>
            <StyledThumnailA href={linkUrl}>
              <img src={imageUrl} alt={goodsName} />
            </StyledThumnailA>
            <StyledInformationA href={brandLinkUrl}>
              <StyledNameP>
                {brandName}
              </StyledNameP>
              <StyledNameP strong>
                {goodsName}
              </StyledNameP>
              <StyledPriceP>
                <span>
                  {saleRate > 0 && <del>{normalPrice}원</del>}
                  {price}원
                </span>
                {saleRate > 0 && (
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

const StyledThumnailA = styled.a`
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 120%;
  margin-bottom: 20px;

  img {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
  }
`;

const StyledInformationA = styled.a`
  display: block;
`;

const StyledNameP = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${props => props.strong && css`font-weight: bold;`}

  & + & {
    margin-top: 10px;
  }
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

export default ProductList;