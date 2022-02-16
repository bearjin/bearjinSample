import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import GlobalStyles from './style/GlobalStyles';
import Header from './components/Header';
import ProductList from './components/ProductList';
import MenubarBottom from './components/MenubarBottom';
import Filter from './components/Filter';
import Popup from './components/Popup';

const App = () => {
  const [filterType, setFilterType] = useState('전체');
  const [count, setCount] = useState(0);
  const [popupActive, setPopupActive] = useState(false);
  const handleClickType = (type) => setFilterType(type);
  const handleClickCount = () => setCount(0);
  const handleClickPopupOpen = () => setPopupActive(true);
  const handleClickPopupClose = () => setPopupActive(false);
  
  return (
    <>
      <GlobalStyles />
      <Header handleClickPopupOpen={handleClickPopupOpen} />
      <Filter category={'ranking'} handleClickType={handleClickType} handleClickCount={handleClickCount} />
      <ProductList filterType={filterType} count={count} />
      <MenubarBottom />
      <Popup isActive={popupActive} handleClickPopupClose={handleClickPopupClose} />
    </>
  );
};

export default hot(App);