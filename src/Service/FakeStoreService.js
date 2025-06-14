import axios from 'axios';

let api = 'https://fakestoreapi.com/products';

export async function GetProductById(id) {
    const promise = await axios.get(`${api}/${id}`);
    
    try {
        return promise.data;
    } catch (e) {
        return null;
    }
}

export async function GetProductsByCategory(type) {
    //single quote is not turning to ASCII. Do manualy..
    const encodeType = encodeURIComponent(type).replace(/'/g, "%27"); 
    const promise = await axios.get(`${api}/category/${encodeType}`);
    
    try {
        return promise.data;
    } catch (e) {
        return null;
    }}