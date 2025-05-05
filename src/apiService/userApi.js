import axios from "axios";

let base_url = "http://localhost:4000"

let FetchUsers = async () => await axios.get(`${base_url}/users/`)
let Login = async (data) => await axios.post(`${base_url}/users/login`, data, )
let Register = async (data) => await axios.post(`${base_url}/users/register`, data, )

export { FetchUsers, Login, Register }