import axios from "axios";

let base_url = "http://localhost:4000"

let FetchProducts = () => axios.get(`${base_url}/products/`, )
let FetchProductById = (id) => axios.get(`${base_url}/products/${id}`, )
let AddProducts = (data) => axios.post(`${base_url}/products/add`, data)
let UpdateProducts = (id, data) => axios.put(`${base_url}/products/update/${id}`, data, )
let DeleteProducts = (id) => axios.delete(`${base_url}/products/delete/${id}`)

export { FetchProducts, FetchProductById, AddProducts, UpdateProducts, DeleteProducts }
