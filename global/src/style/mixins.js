import { css } from 'styled-components';

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const position = (type, left, top, bottom, right) => css`
  position: ${type};
  left: ${left};
  top: ${top};
  bottom: ${bottom};
  right: ${right};
`;

const overflowScroll = css`
  overflow-x: scroll;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const mixins = {
  flexCenter,
  position,
  overflowScroll,
}

export default mixins;