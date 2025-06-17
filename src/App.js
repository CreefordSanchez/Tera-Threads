import Home from "../src/Pages/Home";
import Product from "../src/Pages/Product";
import Cart from "../src/Pages/Cart";
import './css/index.css';
import {Route, Routes} from 'react-router-dom';
import Test from "./Pages/Test";
import Header from "./Compoment/Header";
import Error404 from "./Pages/Error404";
import Footer from "./Compoment/Footer";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='Tera-Threads/' element={<Home />} />
        <Route exact path='cart' element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route exact path='axios' element={<Test />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
