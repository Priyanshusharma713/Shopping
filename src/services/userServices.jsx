import axios from "axios"

export const userLogin = async (payload) => {
   return await axios.post("https://dummyjson.com/user/login",payload, {headers: { 'Content-Type': 'application/json' }}).then(res => res)
}

