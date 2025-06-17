import './css/index.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home';
import Product from '../src/Pages/Product';
import Cart from '../src/Pages/Cart';
import Test from '../src/Pages/Test';
import Header from './Compoment/Header';
import Error404 from './Pages/Error404';
import Footer from "./Compoment/Footer";

function App() {
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
        <Route 
          exact 
          path="/" 
          element={
            <Home reviews={reviews} addReview={addReview} />
          } 
        />
        <Route exact path='cart' element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route exact path="axios" element={<Test />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
  );
}

export default App;
