import Home from "../src/Pages/Home";
import Product from "../src/Pages/Product";
import Cart from "../src/Pages/Cart";
import SearchPage from "../src/Pages/SearchPage";

import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='search' element={<SearchPage />} />
        <Route exact path='product' element={<Product />} />
        <Route exact path='cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
