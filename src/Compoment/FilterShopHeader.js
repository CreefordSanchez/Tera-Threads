function FilterShopHeader(prop) {
    return (
        <form className="container">
            <h2 className="product-h2">Check out our best sellers!</h2>
            <div className="flex-center flex-space-between">
                <input onChange={(event) => prop.setProductName(event.target.value)} placeholder="Product Name"></input>
                <div className="filter-dropdown flex-align-center">
                    <select onChange={(event) => prop.setCategory(event.target.value)}>
                        <option>Select a Category</option>
                        <option value={"women's clothing"}>Woman's Clothing</option>
                        <option value={"men's clothing"}>Man's Clothing</option>
                        <option value={"jewelery"}>Jewery's</option>
                        <option value={"electronics"}>Electronic's</option>
                    </select>
                </div>                        
            </div>
        </form>    
    )
}

export default FilterShopHeader;