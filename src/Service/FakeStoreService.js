import axios from 'axios';

let api = 'https://fakestoreapi.com/products';

export async function GetProductById(id) {
    try {
        const res = await axios.get(`${api}/${id}`);
        return res.data;
    } catch (e) {
        console.error("Error in GetProductById:", e);
        return null;
    }
}

export async function GetProductsByCategory(type) {
    try {
        const encodeType = encodeURIComponent(type).replace(/'/g, "%27");
        const res = await axios.get(`${api}/category/${encodeType}`);
        return res.data;
    } catch (e) {
        console.error("Error in GetProductsByCategory:", e);
        return null;
    }
}
