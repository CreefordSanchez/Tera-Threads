function ProductBox(prop) {
    return (
        <div className="product-box">
            <div className="product-img-box flex-center">
                <img src={prop.Image}/>
            </div>
            <div className="product-detail">
                <p>{prop.Title}</p>
                <p>{prop.Price}</p>
            </div>
        </div>
    )
}

export default ProductBox;