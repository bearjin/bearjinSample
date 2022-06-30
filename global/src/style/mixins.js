import { css } from "styled-components";

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const position = (type, left, top, bottom, right) => css`
  position: ${type};
  left: ${left};
  top: ${top};
  bottom: ${bottom};
  right: ${right};
`;

export const overflowScroll = css`
  overflow-x: scroll;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const fadeInAndOut = css`
  visibility: hidden;
  opacity: 0;

  ${({ isActive }) =>
    isActive &&
    `
    visibility: visible;
    opacity: 1;
  `}
`;

export const textOverflow = (line = 1) => css`
  text-overflow: ellipsis;
  overflow: hidden;

  ${line > 1
    ? `
    display: -webkit-box;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
  `
    : `white-space: nowrap;`}
`;

export const mixinBlindScroll = css`
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;