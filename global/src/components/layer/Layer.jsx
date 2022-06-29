import React, { useState, useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import { desktop, colors } from "../../style/variables";
import lottie from "lottie-web";
import Dim from './Dim';

const introLayerData = [
  {
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
    text: `Embrace the spirit of Seoul’s fashion leaders,
who believes ‘Diversity’ is
the source of inspiration that paves
the road for infinite possibilities.`,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/10/22/09/58/lion-2877304_1280.jpg",
  },
  {
    text: `Wear the vibes of K-fashion that’s
only found at MUSINSA, anywhere and
everywhere around the world.`,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/04/20/23/11/great-britain-1342316_1280.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2019/09/18/17/06/thailand-4487239_1280.jpg",
  },
];

const IntroLayer = () => {
  const SECONDS = 5;
  const MAX_CONTENT = introLayerData.length - 1;
  const [count, setCount] = useState(0);
  const [isLayerHidden, setLayerHidden] = useState(false);
  const barWidth = useRef(0);
  const progressBarRef = useRef([]);
  const lottieRef = useRef(null);
  const animationRef = useRef();
  const animationStateRef = useRef(false);

  useEffect(() => {
    const barAnimation = setInterval(() => {
      if (progressBarRef.current) {
        barWidth.current += 1;
        progressBarRef.current[count].style.width = barWidth.current + "%";

        //프로그레스바 width가 100% 되고 마지막스텝이 아닐 경우
        if (barWidth.current >= 100 && count < MAX_CONTENT) {
          clearInterval(barAnimation);
          barWidth.current = 0;
          setCount((prev) => prev + 1);
        } else if (count === MAX_CONTENT) {
          // 마지막 스텝일 경우
          clearInterval(barAnimation);
        }
      }
    }, ((count === 2 ? SECONDS + 1 : SECONDS) * 1000) / 100); // 3번 슬라이드는 자동롤링 6초

    return () => {
      clearInterval(barAnimation);
    };
  }, [count, MAX_CONTENT]);

  useEffect(() => {
    if (lottieRef.current) {
      animationRef.current = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'https://static.musinsa.com/musinsaUI/global/lottie/introLayer-blank.json'
      });
      
      animationRef.current.addEventListener('data_failed', () => {
        console.log('failed');
      });

      animationRef.current.addEventListener('DOMLoaded', () => {
        console.log('success');
        animationStateRef.current = true;
        if (animationRef.current) animationRef.current.playSegments([0, 60], true);
      });
    }

    return () => {
      if (animationRef.current) animationRef.current.destroy();
    }
  }, []);

  useEffect(() => {
    const animationRange = [
      [0, 60],
      [60, 120],
      [120, 450],
    ];

    if (animationRef.current && animationStateRef.current) {
      if (count <= 2) {
        animationRef.current.playSegments(animationRange[count], true);
      }
    }
  }, [count]);

  return (
    <>
      <Dim isLayerHidden={isLayerHidden} />
      <StyledLayer isLayerHidden={isLayerHidden}>
        <StyledLayerContent>
          <StyledTitleWrap isActive={count === MAX_CONTENT}>
            <StyledTitleBox>
              <StyledTitle>WEAR THE</StyledTitle>
              <StyledLottie ref={lottieRef}></StyledLottie>
            </StyledTitleBox>
          </StyledTitleWrap>
          <StyledInformation>
            {introLayerData.map(({ text }, index) => {
              return (
                <StyledInformationItem
                  key={index}
                  isPrev={count > index}
                  isActive={count === index}
                >
                  {index === MAX_CONTENT ? (
                    <StyledInformationBox position={"center"}>
                      <StyledSubTitle>
                        WEAR THE <StyledBraket />
                      </StyledSubTitle>
                      <StyledTitle>MUSINSA</StyledTitle>
                    </StyledInformationBox>
                  ) : (
                    <StyledInformationBox>
                      <StyledText>{text}</StyledText>
                    </StyledInformationBox>
                  )}
                </StyledInformationItem>
              );
            })}
          </StyledInformation>
          <StyledImageList>
            {introLayerData.map(({ imageUrl }, index) => {
              return (
                <StyledImageItem
                  key={index}
                  isPrev={count > index}
                  isNext={count + 1 === index}
                  isActive={count === index}
                >
                  <StyledImageBox isScale={count >= index}>
                    <img src={imageUrl} alt="intro layer" />
                  </StyledImageBox>
                </StyledImageItem>
              );
            })}
          </StyledImageList>
        </StyledLayerContent>
        <StyledBottomWrap isActive={count === MAX_CONTENT}>
          <StyledProgress>
            {introLayerData.map((item, index) => {
              return (
                <StyledProgressItem key={index} isActive={count === index}>
                  <StyledProgressBar
                    ref={(el) => {
                      if (el !== null) progressBarRef.current[index] = el;
                    }}
                  />
                </StyledProgressItem>
              );
            })}
          </StyledProgress>
          <StyledNextButton
            onClick={() => {
              setCount((prev) => prev + 1);
              barWidth.current = 0;
            }}
          >
            Next
            <StyledNextButtonBar />
          </StyledNextButton>
        </StyledBottomWrap>
        <StyledShopNow isActive={count === MAX_CONTENT}>
          <StyledShopNowButton onClick={() => setLayerHidden(true)}>
            Shop Now
          </StyledShopNowButton>
        </StyledShopNow>
      </StyledLayer>
    </>
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
  overflow: hidden;
  display: ${({ isLayerHidden }) => (isLayerHidden ? "none" : "block")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 110;

  ${desktop} {
    top: 50%;
    left: 50%;
    width: 480px;
    height: 600px;
    margin: -300px 0 0 -240px;
  }
`;

const StyledLayerContent = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledLottie = styled.div`
  width: 250px;
  height: 55px;
`;

const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.07);
  }
`;

const StyledInformation = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
`;

const StyledInformationItem = styled.li`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(100%);
  transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);

  ${({ isActive }) =>
    isActive &&
    css`
      transform: translateX(0);
    `}

  ${({ isPrev }) =>
    isPrev &&
    css`
      transform: translateX(-100%);
    `}
`;

const StyledInformationBox = styled.div`
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
          top: 356px;
          left: 20px;
        `}

  ${desktop} {
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
            top: 263px;
            left: 73px;
          `}
  }
`;

const StyledTitleWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: translateX(-100%);
      transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
    `}
`;

const StyledTitleBox = styled.div`
  position: absolute;
  top: 194px;
  left: 20px;

  ${desktop} {
    top: 113px;
    left: 79px;
  }
`;

const StyledTitle = styled.p`
  font-weight: 700;
  font-size: 50px;
  color: ${colors.white};
  line-height: 65px;
`;

const StyledSubTitle = styled.p`
  display: flex;
  margin-bottom: 4px;
  font-size: 18px;
  color: ${colors.white};
`;

const StyledText = styled.p`
  font-size: 16px;
  color: ${colors.white};
  white-space: pre-wrap;
`;

const StyledBraket = styled.span`
  position: relative;
  display: block;
  width: 120px;
  margin-left: 4px;

  &::before,
  &::after {
    position: absolute;
    top: 0;
  }

  &::before {
    content: "[";
    left: 0;
  }

  &::after {
    content: "]";
    right: 0;
  }
`;

const StyledImageList = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const StyledImageItem = styled.li`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: clip-path 0.65s cubic-bezier(0.4, 0, 0.2, 1);

  ${itemNthChild(introLayerData.length)}

  ${({ isPrev }) =>
    isPrev &&
    css`
      clip-path: inset(0 100% 0 0);
    `}

  ${({ isActive }) =>
    isActive &&
    css`
      clip-path: inset(0 0 0 0);
    `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);

    ${({ isPrev }) =>
      isPrev &&
      css`
        transform: translateX(-30%);
      `}

    ${({ isNext }) =>
      isNext &&
      css`
        transform: translateX(30%);
      `}
  }
`;

const StyledImageBox = styled.div`
  width: 100%;
  height: 100%;

  ${({ isScale }) =>
    isScale &&
    css`
      animation: ${scaleAnimation} 5.65s linear forwards;
    `}
`;

const StyledBottomWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: translateX(-100%);
      transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
    `}
`;

const StyledProgress = styled.ul`
  display: flex;
  position: absolute;
  bottom: calc(env(safe-area-inset-bottom) + 54px);
  left: 20px;
  z-index: 10;
  width: 100%;
  box-sizing: border-box;

  ${desktop} {
    left: 73px;
    bottom: calc(env(safe-area-inset-bottom) + 57px);
  }
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
  height: 100%;
  border-radius: 10px;
  background-color: ${colors.white};
  transition: width 0.3s linear;
`;

const StyledNextButton = styled.button`
  position: absolute;
  right: 21px;
  bottom: calc(env(safe-area-inset-bottom) + 57px);
  z-index: 10;
  font-weight: 700;
  font-size: 16px;
  color: ${colors.white};
  text-align: left;
  line-height: 1;

  ${desktop} {
    right: 72px;
    bottom: calc(env(safe-area-inset-bottom) + 60px);
  }
`;

const StyledNextButtonBar = styled.span`
  display: block;
  position: relative;
  width: 56px;
  height: 2px;
  margin-top: 7px;
  border-radius: 0 2px 2px 0;
  background-color: ${colors.white};

  &::after {
    content: "";
    position: absolute;
    top: -4px;
    right: 0;
    width: 10px;
    height: 2px;
    background-color: ${colors.white};
    transform: rotate(45deg);
  }
`;

const StyledShopNow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  transform: translateX(100%);
  transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);

  ${({ isActive }) =>
    isActive &&
    css`
      transform: translateX(0);
    `}
`;

const StyledShopNowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: calc(env(safe-area-inset-bottom) + 54px);
  left: 20px;
  width: calc(100% - 40px);
  height: 48px;
  border: 1px solid ${colors.gray300};
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  color: ${colors.white};
`;
