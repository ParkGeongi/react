import axios from "axios"
const server = `http://localhost:8000`
export const IrisService = req => axios.post(`${server}/ml/iris`, req)
