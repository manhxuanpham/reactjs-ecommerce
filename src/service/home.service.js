import { apiClient } from "../constant/api";

export const getProducts = async () => {
    try {
        const response = await apiClient.get('/v1/api/product') 
        return  response.data
    } catch (error) {
        console.log(error)
        return []
    }
}
export const getCategories = async () => {
    try {
        const response = await apiClient.get('/v1/api/category')
        return response.data
    } catch (error) {
        console.log(error)
        return []

    }
}