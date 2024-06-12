import { apiClient } from "../constant/api";

export const getAllCategory = async () => {

    try {
        const response = await apiClient.get(`v1/api/category`)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}