import ProductDetail from "../Compoment/ProductDetail";
import  useProductData  from "../Compoment/UseProductData";
import SuggestedProducts from "../Compoment/SuggestedProducts";
import { motion } from "motion/react"

function Product(props) {
  const { product, suggestions, handleAddToCart } = useProductData(props.dispatch);
  if (!product) return <h2>Loading product...</h2>;
  return (
    <motion.div 
    initial={{opacity: 0, y: -30}}
    animate={{opacity: 1, y: 0}}
    transition={{duration:0.5, ease:'easeOut'}}>
      <ProductDetail product={product} handleAddToCart={handleAddToCart} />
      <SuggestedProducts suggestions={suggestions} />
    </motion.div>
  );
}

export default Product;
