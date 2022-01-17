import React from 'react';
import AddNumber from './AddNumber';

const AddNumberRoot = ({ handleClickButton }) => {
  return (
    <div>
      <h1>AddNumber</h1>
      <AddNumber handleClickButton={handleClickButton} />
    </div>
  );
};

export default AddNumberRoot;