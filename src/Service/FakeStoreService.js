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

export const GetAllProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');  
    if (!response.ok) {
      throw new Error('Failed to fetch all products');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export function getRandomItems(arr, n) {
  return arr.sort(() => Math.random() - 0.5).slice(0, n);
}

