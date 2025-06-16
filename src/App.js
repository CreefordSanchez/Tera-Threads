import Home from "../src/Pages/Home";
import Product from "../src/Pages/Product";
import Cart from "../src/Pages/Cart";
import './css/index.css';
import {Route, Routes} from 'react-router-dom';
import Test from "./Pages/Test";
import Header from "./Compoment/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        {/* <Route exact path='product' element={<Product />} /> */}
        <Route exact path='cart' element={<Cart />} />
        <Route exact path='axios' element={<Test />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
