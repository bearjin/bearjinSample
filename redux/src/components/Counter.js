import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCounter = styled.div`
  text-align: center;
`;

const StyledButton = styled.button`
  & + & {
    margin-left: 10px;
  }
`;

const Counter = ({ value, onIncrement, onDecrement }) => {
  const incrementIfOdd = () => {
    if (value % 2 !== 0) {
      onIncrement();
    }
  }

  const incrementAsync = () => {
    setTimeout(onIncrement, 1000);
  }

  return (
    <StyledCounter>
      <p>
        Clicked: {value}
      </p>
      <StyledButton type="button" onClick={onIncrement}>
        +
      </StyledButton>
      <StyledButton type="button" onClick={onDecrement}>
        -
      </StyledButton>
      <StyledButton type="button" onClick={incrementIfOdd}>
        Increment if odd
      </StyledButton>
      <StyledButton type="button" onClick={incrementAsync}>
        Increment async
      </StyledButton>
    </StyledCounter>
  )
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter;