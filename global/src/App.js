import React, { useState } from "react";
// import hot from "react-hot-loader";
import GlobalStyles from "./style/GlobalStyles";
import Header from "./components/Header";
import ProductList from "./components/productList/ProductList";
import MenubarBottom from "./components/MenubarBottom";
import Filter from "./components/Filter";
import Popup from "./components/Popup";
import SearchBar from "./components/SearchBar";
import Layer from "./components/layer/Layer";
import SizeTab from "./components/SizeTab";
import TypeTab from "./components/TypeTab";
import TabContent from "./components/TabContent";

const App = () => {
  const [filterType, setFilterType] = useState("전체");
  const [popupActive, setPopupActive] = useState(false);

  return (
    <>
      <GlobalStyles />
      {/* <Header handleActivePopup={setPopupActive} />
      <SearchBar />
      <Filter category={"ranking"} handleChangeType={setFilterType} />
      <ProductList filterType={filterType} />
      <MenubarBottom />
      <Popup isActive={popupActive} handleActivePopup={setPopupActive} /> */}
      {/* <Layer /> */}
      <SizeTab />
      <TypeTab />
      <TabContent />
    </>
  );
};

export default App;
