import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProductBox from "../Compoment/ProductBox";
import { FaStar } from 'react-icons/fa';
import Error404 from "./Error404";
import { GetProductById } from "../Service/FakeStoreService";

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    let navigate = useNavigate();

    // Fetch the main product
    useEffect(() => {
        const fetchProduct = async () => {
            const promise = await GetProductById(id);
            if (promise != '') {
                setProduct(promise);
            } else {
                navigate('*');
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
            <div className="product-main-detail" >
                <img src={product.image} alt={product.title} />
                <div>
                <h3>Price: ${product.price}</h3>
                <p><strong>Description:</strong> {product.description}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Rating:</strong> {product.rating?.rate} <FaStar className="star-icon" /> ({product.rating?.count} reviews)</p>
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
