import { useEffect, useRef, useState } from "react";
import { GetProductsByCategory, GetAllProducts, getRandomItems } from '../Service/FakeStoreService.js';
import FilterShopHeader from "./FilterShopHeader.js";
import ProductList from "./ProductList.js";

function FilterShop() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("all");
    const [productName, setProductName] = useState('');    
    const prevCategory = useRef(category);
    const prevName = useRef(productName);

    useEffect(() => {
        const displayProducts = async () => {
        let list;

        if (!category || category === "all") {
            list = await GetAllProducts();  
            list = getRandomItems(list, 8);
        } else {
            list = await GetProductsByCategory(category);
        }

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
        <section className="one products-section">
            <div className="sort-product-header border-bottom-gray">
                <FilterShopHeader setProductName={setProductName} setCategory={setCategory}/>          
            </div>
            <ProductList products={products}/>
        </section>
    )
}


export default FilterShop;