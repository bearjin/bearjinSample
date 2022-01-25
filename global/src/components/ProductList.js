import React from 'react';
import styled, { css } from 'styled-components'
import GoodsData from '../data/goods.json';

const listData = GoodsData.data.list;

const StyledWrapSection = styled.section``;

const StyledListUl = styled.ul`
  display: flex;
`;

const StyledListLi = styled.li`
  flex: 0 0 calc(100% / 3);
`;

const StyledThumnailDiv = styled.div`
  margin-bottom: 10px;

  img {
    width: 100%;
  }
`;

const StyledInformationDiv = styled.div``;

const StyledNameP = styled.p`
  ${props => props.strong && css`font-weight: bold;`}

  & + & {
    margin-top: 10px;
  }
`;

const ProductList = () => {
  return (
    <StyledWrapSection>
      <StyledListUl>
        {listData.map(({ goodsNo, goodsName, price, brandName, imageUrl }, index) => (
          <StyledListLi key={goodsNo}>
            <StyledThumnailDiv>
              <img src={imageUrl} alt={goodsName} />
            </StyledThumnailDiv>
            <StyledInformationDiv>
              <StyledNameP>
                {brandName}
              </StyledNameP>
              <StyledNameP strong>
                {goodsName}
              </StyledNameP>
            </StyledInformationDiv>
          </StyledListLi>
        ))}
      </StyledListUl>
    </StyledWrapSection>
  );
};

export default ProductList;