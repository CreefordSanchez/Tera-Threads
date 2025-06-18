import Home from "../src/Pages/Home";
import Product from "../src/Pages/Product";
import './css/index.css';
import {Route, Routes} from 'react-router-dom';
import Test from "./Pages/Test";
import Header from "./Compoment/Header";
import Error404 from "./Pages/Error404";
import Cart from "./Pages/Cart";
import CartReducer from './Compoment/CartReducer';
import { useReducer } from 'react';

function App() {
  const [cart, dispatch] = useReducer(CartReducer, []);
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart cart={cart} dispatch={dispatch}/>} />
        <Route path='/product/:id' element={<Product cart={cart} dispatch={dispatch}/>} />
        <Route path='/axios' element={<Test />} />
        <Route 
          exact 
          path="/" 
          element={
            <Home reviews={reviews} addReview={addReview} />
          } 
        />
        <Route 
          exact 
          path="Tera-Threads/" 
          element={
            <Home reviews={reviews} addReview={addReview} />
          } 
        />
        <Route exact path='cart' element={<Cart />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
