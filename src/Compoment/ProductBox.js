import { Link } from "react-router-dom";

function ProductBox(props) {
    const content = (
        <div className="product-box border-rad-5">
            <div className="product-img-box flex-center">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="product-detail">
                <p>{props.title}</p>
                <p>{props.price}</p>
            </div>
        </div>
    );

    return (
        <>
            {props.clickable
                ? <Link to={`/product/${props.id}`} className="link-wrapper">{content}</Link>
                : content
            }
        </>
    );
}

export default ProductBox;