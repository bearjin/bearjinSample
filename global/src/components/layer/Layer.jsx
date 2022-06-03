import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const ContentData = [
  {
    title: "Title1",
    subTitle: "SubTitle1",
    imageUrl:
      "https://cdn.pixabay.com/photo/2012/12/22/23/40/patagonia-71911_1280.jpg",
  },
  {
    title: "Title2",
    subTitle: "SubTitle2",
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/10/22/09/58/lion-2877304_1280.jpg",
  },
  {
    title: "Title3",
    subTitle: "SubTitle3",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/04/20/23/11/great-britain-1342316_1280.jpg",
  },
  {
    title: "Title4",
    subTitle: "SubTitle4",
    imageUrl:
      "https://cdn.pixabay.com/photo/2019/09/18/17/06/thailand-4487239_1280.jpg",
  },
];

const Layer = () => {
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
        {ContentData.map(({ title, subTitle, imageUrl }, index) => {
          return (
            <StyledLayerContentItem
              key={title + index}
              className={`${count > index ? "active" : ""}`}
            >
              <StyledTitleWrap>
                <StyledTitle>{title}</StyledTitle>
                <StyledSubTitle>{subTitle}</StyledSubTitle>
              </StyledTitleWrap>
              <img src={imageUrl} alt="이미지" />
            </StyledLayerContentItem>
          );
        })}
      </StyledLayerContent>
      <StyledProgress>
        {ContentData.map((item, index) => {
          return index < ContentData.length - 1 ? (
            <StyledProgressItem key={item.title + index}>
              <StyledProgressBar
                style={
                  count === index
                    ? { width: barWidth + "%" }
                    : count > index
                    ? { width: "100%" }
                    : null
                }
              />
            </StyledProgressItem>
          ) : null;
        })}
      </StyledProgress>
      <StyledNextButton
        onClick={() => {
          count > 2
            ? (window.location.href = "/")
            : setCount((prev) => prev + 1);
          setBarWidth(0);
        }}
      >
        {count > 2 ? "Shop now" : "NEXT"}
        <StyledNextButtonBar />
      </StyledNextButton>
    </StyledLayer>
  );
};

export default Layer;

const StyledLayer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
`;

const StyledLayerContent = styled.div`
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

  &:nth-child(1) {
    background-color: wheat;
    z-index: 5;
  }

  &:nth-child(2) {
    background-color: darkblue;
    z-index: 4;
  }

  &:nth-child(3) {
    background-color: darkcyan;
    z-index: 3;
  }

  &:nth-child(4) {
    background-color: palevioletred;
    z-index: 2;
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledTitleWrap = styled.div`
  position: absolute;
  top: 100px;
  left: 50px;
`;

const StyledTitle = styled.p`
  font-weight: bold;
  font-size: 50px;
  color: #fff;
`;

const StyledSubTitle = styled.p`
  margin-top: 20px;
  font-size: 30px;
  color: #fff;
`;

const StyledProgress = styled.ul`
  display: flex;
  position: absolute;
  bottom: 50px;
  left: 0;
  z-index: 10;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;

const StyledProgressItem = styled.li`
  position: relative;
  flex: 1;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.3);

  & + & {
    margin-left: 10px;
  }
`;

const StyledProgressBar = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #fff;
  transition: width 0.1s linear;
`;

const StyledNextButton = styled.button`
  position: absolute;
  right: 30px;
  bottom: 100px;
  z-index: 10;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`;

const StyledNextButtonBar = styled.span`
  display: block;
  width: 100px;
  height: 3px;
  margin-top: 10px;
  background-color: #fff;
`;
