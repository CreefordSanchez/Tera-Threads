import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductBox from "../Compoment/ProductBox";
import { FaStar } from 'react-icons/fa';
import { GetProductById, GetProductsByCategory } from '../Service/FakeStoreService';
import { Link } from "react-router-dom";

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [suggestions, setSuggestions] = useState([]);

    // Fetch the main product
    useEffect(() => {
        const fetchProduct = async () => {
            const data = await GetProductById(id);
            if (data) setProduct(data);
        };
        fetchProduct();
    }, [id]);

    // Fetch the related Product
    useEffect(() => {
        const fetchSuggestions = async () => {
            if (product?.category) {
                const data = await GetProductsByCategory(product.category);
                if (data) {
                    const related = data.filter(p => p.id !== product.id).slice(0, 3);
                    setSuggestions(related);
                }
            }
        };
        fetchSuggestions();
    }, [product]);

    if (!product) { 
        return <h2>Loading product...</h2>; 
    }

    return (
        <div className="product-detail-page container section-break">
            <h1>{product.title}</h1>
            <div className="product-main-detail" >
                <img src={product.image} alt={product.title} />
                <div>
                <h3>Price: ${product.price}</h3>
                <p><strong>Description:</strong> {product.description}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Rating:</strong> {product.rating?.rate} <FaStar className="star-icon" /> ({product.rating?.count} reviews)</p>
                <Link to='./cart'><button>Add to Cart</button></Link>
                </div>
            </div>

            <h2>Similar Products</h2>
            <div className="suggested-products">
                {suggestions.length > 0 ? (
                    suggestions.map(item => (
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
}

export default Product;
