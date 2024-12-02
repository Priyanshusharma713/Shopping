import axios from "axios"

export const getAllProductMethods = async () => {

   return await axios.get("https://dummyjson.com/products", {headers: { 'Content-Type': 'application/json' }})
}