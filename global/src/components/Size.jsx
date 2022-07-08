import React, { useState } from "react";
import SizeTab from "./SizeTab";
import TypeTab from "./TypeTab";
import TabContent from "./TabContent";

const Size = () => {
  const [activeType, setActiveType] = useState("men-clothes");

  return (
    <>
      {/* <SizeTab /> */}
      <TypeTab handleActiveType={setActiveType} />
      <TabContent activeType={activeType} />
    </>
  );
};

export default Size;
