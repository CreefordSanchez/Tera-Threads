import ProductDetail from "../Compoment/ProductDetail";
import  useProductData  from "../Compoment/UseProductData";
import SuggestedProducts from "../Compoment/SuggestedProducts";

function Product(props) {
  const { product, suggestions, handleAddToCart } = useProductData(props.dispatch);
  if (!product) return <h2>Loading product...</h2>;
  return (
    <div>
      <ProductDetail product={product} handleAddToCart={handleAddToCart} />
      <SuggestedProducts suggestions={suggestions} />
    </div>
  );
}

export default Product;
