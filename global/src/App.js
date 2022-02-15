import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import GlobalStyles from './style/GlobalStyles';
import Header from './components/Header';
import ProductList from './components/ProductList';
import MenubarBottom from './components/MenubarBottom';
import Filter from './components/Filter';

const App = () => {
  const [filterType, setFilterType] = useState('전체');
  const [count, setCount] = useState(0);
  const handleClickType = (type) => setFilterType(type);
  const handleClickCount = () => setCount(0);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Filter category={'ranking'} handleClickType={handleClickType} handleClickCount={handleClickCount} />
      <ProductList filterType={filterType} count={count} />
      <MenubarBottom />
    </>
  );
};

export default hot(App);