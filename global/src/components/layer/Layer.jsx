import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const introLayerData = [
  {
    title: "Seoul",
    text: `Just like the dynamic city of Seoul,
carious fashion styles and
philosophies coexist whithin the
grounds of MUSINSA, where unique
fashion traits can be evcavated in
real-time`,
    imageUrl:
      "https://cdn.pixabay.com/photo/2012/12/22/23/40/patagonia-71911_1280.jpg",
  },
  {
    title: "Diversity",
    text: `Embrace the spirit of Seoul’s fashion leaders,
who believes ‘Diversity’ is
the source of inspiration that paves
the road for infinite possibilities.`,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/10/22/09/58/lion-2877304_1280.jpg",
  },
  {
    title: "Musinsa",
    text: `Wear the vibes of K-fashion that’s
only found at MUSINSA, anywhere and
everywhere around the world.`,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/04/20/23/11/great-britain-1342316_1280.jpg",
  },
  {
    title: "Musinsa",
    imageUrl:
      "https://cdn.pixabay.com/photo/2019/09/18/17/06/thailand-4487239_1280.jpg",
  },
];

const IntroLayer = () => {
  const [count, setCount] = useState(0);
  const [barWidth, setBarWidth] = useState(0);
  const SECONDS = 5;

  useEffect(() => {
    const barAnimation = setInterval(() => {
      setBarWidth((prev) => prev + 1);
    }, (SECONDS * 1000) / 100);

    // 프로그레스바 width가 100% 되고 마지막스텝이 아닐 경우
    if (barWidth >= 100 && count < 3) {
      clearInterval(barAnimation);
      setCount((prev) => prev + 1);
      setBarWidth(0);
    } else if (count > 2) {
      // 마지막 스텝일 경우
      clearInterval(barAnimation);
    }

    return () => {
      clearInterval(barAnimation);
    };
  }, [barWidth, count]);

  return (
    <StyledLayer>
      <StyledLayerContent>
        {introLayerData.map(({ title, text, imageUrl }, index) => {
          return index === 3 ? (
            <StyledLayerContentItem
              key={title + index}
              className={`${count > index ? "active" : ""}`}
            >
              <StyledInformation position={"center"}>
                <StyledSubTitle>WEAR THE [{title}]</StyledSubTitle>
                <StyledTitle>MUSINSA</StyledTitle>
              </StyledInformation>
              <img src={imageUrl} alt="이미지" />
            </StyledLayerContentItem>
          ) : (
            <StyledLayerContentItem
              key={title + index}
              className={`${count > index ? "active" : ""}`}
            >
              <StyledInformation>
                <StyledTitleWrap>
                  <StyledTitle>Wear the</StyledTitle>
                  <StyledTitle>[{title}]</StyledTitle>
                </StyledTitleWrap>
                <StyledText>{text}</StyledText>
              </StyledInformation>
              <img src={imageUrl} alt="이미지" />
            </StyledLayerContentItem>
          );
        })}
      </StyledLayerContent>
      <StyledProgress isActive={count !== 3}>
        {introLayerData.map((item, index) => {
          return (
            <StyledProgressItem
              key={item.title + index}
              isActive={count === index}
            >
              <StyledProgressBar barWidth={count === index ? barWidth : 0} />
            </StyledProgressItem>
          );
        })}
      </StyledProgress>
      <StyledNextButton
        onClick={() => {
          setCount((prev) => prev + 1);
          setBarWidth(0);
        }}
        isActive={count !== 3}
      >
        Next
        <StyledNextButtonBar />
      </StyledNextButton>
      <StyledShopNowLink href="/" isActive={count === 3}>
        Shop Now
      </StyledShopNowLink>
    </StyledLayer>
  );
};

export default IntroLayer;

/**
 * 이미지 nth-child 별로 z-index 값 추가
 * @param {number} MAX_CONTENT : 컨텐츠 length
 * @returns style
 */
const itemNthChild = (MAX_CONTENT) => {
  let style = "";
  for (let i = 0; i < MAX_CONTENT; i++) {
    style += `
      &:nth-child(${i + 1}) {
        z-index: ${MAX_CONTENT - i};
      }
    `;
  }
  return style;
};

const StyledLayer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 110;
`;

const StyledLayerContent = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledLayerContentItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.35s ease-in-out;

  &.active {
    transform: translateX(-100%);
  }

  ${itemNthChild(introLayerData.length)}

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledInformation = styled.div`
  ${({ position }) =>
    position === "center"
      ? css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `
      : css`
          position: absolute;
          top: 100px;
          left: 50px;
        `}
`;

const StyledTitleWrap = styled.div``;

const StyledTitle = styled.p`
  font-weight: 700;
  font-size: 50px;
  color: #fff;
  line-height: 65px;
`;

const StyledSubTitle = styled.p`
  margin-bottom: 4px;
  font-size: 18px;
  color: #fff;
`;

const StyledText = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: #fff;
  white-space: pre-wrap;
`;

const StyledProgress = styled.ul`
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  position: absolute;
  bottom: 54px;
  left: 20px;
  z-index: 10;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;

const StyledProgressItem = styled.li`
  overflow: hidden;
  position: relative;
  width: ${({ isActive }) => (isActive ? "32px" : "6px")};
  height: 6px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  transition: width 0.2s linear;

  & + & {
    margin-left: 12px;
  }
`;

const StyledProgressBar = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ barWidth }) => barWidth + "%"};
  height: 100%;
  background-color: #fff;
  transition: width 0.3s linear;
`;

const StyledNextButton = styled.button`
  display: ${({ isActive }) => (isActive ? "block" : "none")};
  position: absolute;
  right: 21px;
  bottom: 57px;
  z-index: 10;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  text-align: left;
  line-height: 1;
`;

const StyledNextButtonBar = styled.span`
  display: block;
  position: relative;
  width: 56px;
  height: 2px;
  margin-top: 7px;
  border-radius: 0 2px 2px 0;
  background-color: #fff;

  &::after {
    content: "";
    position: absolute;
    top: -4px;
    right: 0;
    width: 10px;
    height: 2px;
    background-color: #fff;
    transform: rotate(45deg);
  }
`;

const StyledShopNowLink = styled.a`
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 54px;
  left: 20px;
  z-index: 10;
  width: calc(100% - 40px);
  height: 48px;
  border: 1px solid #c1c4c9;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
`;
