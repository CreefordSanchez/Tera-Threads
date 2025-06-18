import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GetProductById, GetProductsByCategory } from "../Service/FakeStoreService"; 

const UseProductData = (dispatch) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: product });
    navigate("/cart");
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await GetProductById(id);
      if (data !== "") setProduct(data);
      else navigate("*");
    };
    fetchProduct();
  }, [id, navigate]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (product?.category) {
        const data = await GetProductsByCategory(product.category);
        if (data) {
          const related = data.filter((p) => p.id !== product.id).slice(0, 3);
          setSuggestions(related);
        }
      }
    };
    fetchSuggestions();
  }, [product]);

  return { product, suggestions, handleAddToCart };
};

export default UseProductData;