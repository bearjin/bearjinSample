import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import GlobalStyles from './style/GlobalStyles';
import Header from './components/Header';
import ProductList from './components/ProductList';
import MenubarBottom from './components/MenubarBottom';
import Filter from './components/Filter';

const App = () => {
  const [filterType, setFilterType] = useState('전체');
  const handleClickType = (type) => setFilterType(type);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Filter category={'ranking'} handleClickType={handleClickType} />
      <ProductList filterType={filterType} />
      <MenubarBottom />
    </>
  );
};

export default hot(App);