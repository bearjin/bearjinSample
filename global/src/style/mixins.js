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

const mixins = {
  flexCenter,
  position,
}

export default mixins;