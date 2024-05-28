import { apiClient } from "../constant/api";
import { useSelector } from "react-redux";
export const getProduct = async (productId, accessToken, userId) => {

    try {
        const response = await apiClient.get(`/v1/api/product/spu/get_spu_info?product_id=${productId}`)
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}
