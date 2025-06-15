import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductBox from "../Compoment/ProductBox";
import { FaStar } from 'react-icons/fa';

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [suggestions, setSuggestions] = useState([]);

    // Fetch the main product
    useEffect(() => {
        const fetchProduct = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(res.data);
        } catch (err) {
            console.error("Error fetching product:", err);
        }
        };

        fetchProduct();
    }, [id]);

    // Once the product is fetched, fetch related products
    useEffect(() => {
        const fetchSuggestions = async () => {
        if (product?.category) {
            try {
            const res = await axios.get(`https://fakestoreapi.com/products/category/${product.category}`);
            const related = res.data.filter(p => p.id !== product.id).slice(0, 3);
            setSuggestions(related);
            } catch (err) {
            console.error("Error fetching similar products:", err);
            }
        }
        };

        fetchSuggestions();
    }, [product]);

    if (!product) { 
        return <h2>Loading product...</h2>; 
    }

    return (
        <div className="product-detail-page container">
        <h1>{product.title}</h1>
        <div className="product-main-detail" style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
            <img src={product.image} alt={product.title} style={{ width: '300px', objectFit: 'contain' }} />
            <div>
            <h3>Price: ${product.price}</h3>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Rating:</strong> {product.rating?.rate} <FaStar /> ({product.rating?.count} reviews)</p>
            </div>
        </div>

        <h2>Similar Products</h2>
        <div className="suggested-products" style={{ display: 'flex', gap: '1rem', textDecoration: 'none' }}>
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
