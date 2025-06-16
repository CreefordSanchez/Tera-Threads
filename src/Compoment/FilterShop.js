import { useEffect, useRef, useState } from "react";
import { GetProductsByCategory } from '../Service/FakeStoreService.js';
import ProductBox from "./ProductBox.js";

function FilterShop() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("women's clothing");
    const [productName, setProductName] = useState('');    
    const prevCategory = useRef(category);
    const prevName = useRef(productName);

    useEffect(() => {
        const displayProducts = async () => {
            const list = await GetProductsByCategory(category);
            const filteredName = productName === '' ? list :
            list.filter(item =>
                item.title.toLowerCase().includes(productName.toLowerCase())
            );            
            
            setProducts(filteredName);
        };

        if (products.length === 0 || !(prevCategory.current === category && prevName.current === productName)) {
            displayProducts();
        }

        prevCategory.current = category;
        prevName.current = productName;
    }, [category, productName]);

    return (
        <section>
            <div className="sort-product-header border-bottom-gray">
                <form className="container">
                    <div className="flex-center flex-space-between">
                        <input onChange={(event) => setProductName(event.target.value)} placeholder="Product Name"></input>
                        <div className="filter-dropdown flex-align-center">
                            <select onChange={(event) => setCategory(event.target.value)}>
                                <option>Select a Category</option>
                                <option value={"women's clothing"}>Woman's Clothing</option>
                                <option value={"men's clothing"}>Man's Clothing</option>
                                <option value={"jewelery"}>Jewery's</option>
                                <option value={"electronics"}>Electronic's</option>
                            </select>
                            <i className="fa-solid fa-angle-down"></i>
                        </div>                        
                    </div>
                </form>                
            </div>
           
            <div className="product-list container">
                {products.length > 0 ? 
                    products.map((item, key) => 
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
        </section>
    )
}


export default FilterShop;