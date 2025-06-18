import { FaStar } from "react-icons/fa";

const ProductDetail = (props) => {
  return (
    <div className="product-detail-page section-break">
      <h1>{props.product.title}</h1>

      <div className="product-main-detail container">
        <div className="product-image-box">
          <img src={props.product.image} alt={props.product.title} />
        </div>

        <div className="product-info-box">
          <h3>Price: ${props.product.price}</h3>

          <div>
            <p><strong>Description:</strong></p>
            <ul>
              {props.product.description.split(". ").map((sentence, index) => (
                <li key={index}>{sentence.trim()}</li>
              ))}
            </ul>
          </div>

          <p><strong>Category:</strong> {props.product.category}</p>

          <div className="rating">
            <strong>Rating:</strong> {props.product.rating?.rate}
            <FaStar className="star-icon" />
            <span>({props.product.rating?.count} reviews)</span>
          </div>

          <button onClick={props.handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
