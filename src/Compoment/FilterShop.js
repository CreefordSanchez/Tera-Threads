import { useEffect, useRef, useState } from "react";
import { GetProductsByCategory } from '../Service/FakeStoreService.js';

function FilterShop() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("women's clothing");
    const [productName, setProductName] = useState('');    
    const prevCategory = useRef(category);
    const prevName = useRef(productName);

    useEffect(() => {
        const displayProducts = async () => {
            const list = await GetProductsByCategory(category);
            const filteredName = productName == '' ? list :
            list.filter(item =>
                item.title.toLowerCase().includes(productName.toLowerCase())
            );            
            
            setProducts(filteredName);
        };

        if (products.length == 0 || !(prevCategory.current == category && prevName.current == productName)) {
            displayProducts();
        }

        prevCategory.current = category;
        prevName.current = productName;
    }, [category, productName]);

    return (
        <section>
            <div className="sort-product-header border-bottom">
                <form className="container">
                    <div className="filter-search-bar flex border-rad-5">
                        <input onChange={(event) => setProductName(event.target.value)} placeholder="Product Name"></input>
                        <div className="filter-dropdown flex-center">
                            <select onChange={(event) => setCategory(event.target.value)}>
                                <option>Select a Category</option>
                                <option value={"women's clothing"}>Woman's Clothing</option>
                                <option value={"men's clothing"}>Man's Clothing</option>
                                <option value={"jewelery"}>Jewery's</option>
                                <option value={"electronics"}>Electronic's</option>
                            </select>
                        </div>
                    </div>
                </form>                
            </div>
           
            <div className="product-list container">
                {products.map((item, key) => 
                    <p key={key}>{item.title}</p>
                )}
            </div>
        </section>
    )
}


export default FilterShop;