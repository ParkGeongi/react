import axios from "axios"
const server = `http://localhost:8000`
export const IrisService = req => axios.post(`${server}/ml/iris`, req)
export const StrokeService = req => axios.post(`${server}/ml/stroke`, req)
export const FashionService = req => axios.post(`${server}/ml/fashion`, req)