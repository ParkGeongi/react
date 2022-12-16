import axios from "axios"
const server = `http://localhost:8000`
export const IrisService = req => axios.post(`${server}/ml/iris`, req)
export const StrokeService = req => axios.post(`${server}/ml/stroke`, req)
export const Fashionapi = Num => axios.get(`${server}/ml/fashion?Num=${Num}`)
export const Fashionapi2 = PNum => axios.post(`${server}/ml/fashion?Num=${PNum}`)
