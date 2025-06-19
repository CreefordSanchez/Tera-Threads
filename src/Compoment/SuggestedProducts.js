import ProductBox from "./ProductBox"; 

const SuggestedProducts = ({ suggestions }) => {
  return (
    <div className="suggested-products">
      <h2>You Might Also Like</h2>
      <div className="suggested-products-grid">
        {suggestions.length > 0 ? (
          suggestions.map((item) => (
            <ProductBox
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={`$${item.price}`}
              clickable={true}
            />
          ))
        ) : (
          <p>No similar products found.</p>
        )}
      </div>
    </div>
  );
};

export default SuggestedProducts;
