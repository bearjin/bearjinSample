import React, { useMemo } from 'react';
import styled from 'styled-components';
import { mediaQuery } from '../style/variables';
import GoodsData from '../data/goods.json';
import ProductListItem from './ProductListItem';

const listData = GoodsData.data.list;

const ProductList = ({ filterType }) => {
  const newData = useMemo(() => listData.filter(({ type }) => filterType === '전체' || filterType === type), [filterType]);

  return (
    <StyledWrapSection>
      <StyledListUl>
        {newData.map(({ goodsNo, goodsName, price, brandName, imageUrl, normalPrice, isSale, saleRate, linkUrl, brandLinkUrl, isSoldOut, isExclusive, isLike, type }, index) => (
          <ProductListItem
            key={goodsNo}
            goodsNo={goodsNo}
            goodsName={goodsName}
            price={price}
            brandName={brandName}
            imageUrl={imageUrl}
            normalPrice={normalPrice}
            isSale={isSale}
            isExclusive={isExclusive}
            isSoldOut={isSoldOut}
            saleRate={saleRate}
            linkUrl={linkUrl}
            brandLinkUrl={brandLinkUrl}
            isLike={isLike}
            type={type}
            idx={index + 1}
          />
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

  ${mediaQuery.mediaTablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQuery.mediaDesktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default ProductList;