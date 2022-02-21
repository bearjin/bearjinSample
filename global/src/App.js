import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import GlobalStyles from './style/GlobalStyles';
import Header from './components/Header';
import ProductList from './components/productList/ProductList';
import MenubarBottom from './components/MenubarBottom';
import Filter from './components/Filter';
import Popup from './components/Popup';
import SearchBar from './components/SearchBar';

const App = () => {
  const [filterType, setFilterType] = useState('전체');
  const [popupActive, setPopupActive] = useState(false);
  
  return (
    <>
      <GlobalStyles />
      <Header handleActivePopup={setPopupActive} />
      <SearchBar />
      <Filter category={'ranking'} handleChangeType={setFilterType} />
      <ProductList filterType={filterType} />
      <MenubarBottom />
      <Popup isActive={popupActive} handleActivePopup={setPopupActive} />
    </>
  );
};

export default hot(App);