import React from 'react';
import DisplayNumber from './DisplayNumber';

const DisplayNumberRoot = ({ number }) => {
  return (
    <div>
      <h1>DisplayNumber</h1>
      <DisplayNumber number={number} />
    </div>
  );
};

export default DisplayNumberRoot;