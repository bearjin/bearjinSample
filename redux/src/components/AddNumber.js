import React, { useState } from 'react';

const AddNumber = () => {
  const [addNumber, setAddNumber] = useState();

  const handleInputChange = (e) => {
    setAddNumber(e.target.value);
  }

  return (
    <div>
      <input type="text" value={addNumber} onChange={handleInputChange} />
      <button type="button" style={{ marginLeft: "10px"}}>+</button>
    </div>
  );
};

export default AddNumber;