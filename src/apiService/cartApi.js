import axios from "axios";

let base_url = "http://localhost:4000"

let FetchCart = () => axios.get(`${base_url}/cart/`, )
let FetchCartById = (id) => axios.get(`${base_url}/cart/${id}`, )
let AddCart = (data) => axios.post(`${base_url}/cart/add`, data)
let UpdateCart = (id, data) => axios.put(`${base_url}/cart/update/${id}`, data, )
let DeleteCart = (id) => axios.delete(`${base_url}/cart/delete/${id}`)

export { FetchCart, FetchCartById, AddCart, UpdateCart, DeleteCart }
