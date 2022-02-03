import { hot } from 'react-hot-loader/root';
import GlobalStyles from './style/GlobalStyles';
import Header from './components/Header';
import ProductList from './components/ProductList';
import MenubarBottom from './components/MenubarBottom';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <ProductList />
      <MenubarBottom />
    </>
  );
};

export default hot(App);
