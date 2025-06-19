import ProductBox from "./ProductBox";

function ProductList(prop) {
    return (
        <div className="product-list container">
            {prop.products.length > 0 ? 
                prop.products.map((item, key) => 
                    <ProductBox
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={`$${item.price}`}
                        clickable={true}
                    />
                ) : <h2>No product found</h2>
            }
        </div>
    )
}

export default ProductList;