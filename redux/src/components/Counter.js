import React, { Component } from 'react';
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

class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  } 

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement();
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000);
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
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
        <StyledButton type="button" onClick={this.incrementIfOdd}>
          Increment if odd
        </StyledButton>
        <StyledButton type="button" onClick={this.incrementAsync}>
          Increment async
        </StyledButton>
      </StyledCounter>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter;