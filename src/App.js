import Home from "../src/Pages/Home";
import Product from "../src/Pages/Product";
import './css/index.css';
import {Route, Routes} from 'react-router-dom';
import Header from "./Compoment/Header";
import Error404 from "./Pages/Error404";
import Cart from "./Pages/Cart";
import CartReducer from './Compoment/CartReducer';
import { useReducer, useState } from 'react';
import Footer from './Compoment/Footer';
function App() {
  const [cart, dispatch] = useReducer(CartReducer, []);
  const [reviews, setReviews] = useState([
    { name: 'Lena', text: 'Absolutely love the dress I got!', rating: 5 },
    { name: 'Jade', text: 'Fast shipping and great quality.', rating: 4 },
    { name: 'Alex', text: 'Good quality, and the fit was perfect.', rating: 4 },
    { name: 'Sofia', text: 'Love the minimal packaging and eco focus.', rating: 5 },
    { name: 'Daniel', text: 'Material feels premium and durable.', rating: 4 },
    { name: 'Chloe', text: 'Wore it to a party and got so many compliments!', rating: 5 },
    { name: 'Mason', text: 'Shipping was quick, but I wish sizing was clearer.', rating: 3 },
    { name: 'Isabella', text: 'Excellent customer support. Helped me exchange easily.', rating: 5 },
    { name: 'Ethan', text: 'Stylish and affordable. Will order again.', rating: 4 },
    { name: 'Aria', text: 'Softest fabric ever! Love everything about it.', rating: 5 },
  ]);
 
  const addReview = (review) => {
    setReviews([review, ...reviews]);
  };
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/cart' element={<Cart cart={cart} dispatch={dispatch}/>} />
        <Route path='/product/:id' element={<Product cart={cart} dispatch={dispatch}/>} />
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
        <Route 
          exact 
          path="Tera-Threads" 
          element={
            <Home reviews={reviews} addReview={addReview} />
          } 
        />
        {/* <Route exact path='cart' element={<Cart />} /> */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
