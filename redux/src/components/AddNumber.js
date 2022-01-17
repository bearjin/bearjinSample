import React, { useState } from 'react';

const AddNumber = ({ handleClickButton }) => {
  const [inputNumber, setInputNumber] = useState(0);
  const handleInputChange = (e) => {
    setInputNumber(e.target.value);
  }

  return (
    <div>
      <input type="text" value={inputNumber} onChange={handleInputChange} />
      <button type="button" style={{ marginLeft: "10px"}} onClick={() => handleClickButton(inputNumber)}>+</button>
    </div>
  );
};

export default AddNumber;