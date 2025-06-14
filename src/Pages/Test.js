import { useEffect, useState } from "react";
import { GetProductById, GetProductsByCategory } from "../Service/FakeStoreService.js";

function Test() {
    const [id, setId] = useState(0);

    useEffect(() => {
        const fetchProduct = async () => {
            console.log(`\n\n\n\nGetPRoduct by Id: ${id}`);
            console.log(await GetProductById(id));
            console.log('\n\n\n\nGetPRoduct by Category (electronics):');
            console.log(await GetProductsByCategory("electronics"));
        }

        fetchProduct();
    }, [id]);
    return (
        <>
        <h1>Test page</h1>
        <button onClick={() => setId(id + 1)}>+</button>
        </>
    )
}


export default Test;