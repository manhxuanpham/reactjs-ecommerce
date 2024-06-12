import { apiClient } from "../constant/api";
import { useSelector } from "react-redux";
import MESSAGE from "../utils/modal.message";
export const getProduct = async (productId, accessToken, userId) => {

    try {
        const response = await apiClient.get(`/v1/api/product/spu/get_spu_info?product_id=${productId}`)
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}


export const getAllProductByShop = async (shopId,accessToken,limit= 20,skip=0) => {

    try {
        const response = await apiClient.get(`v1/api/product/drafts/all`,{
            headers: {
                "authorization": accessToken,
                "x-client-id": shopId
            },
            params:{
                limit:limit,
                skip:skip
            }
        })
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export const createSPU = async (shopId, accessToken,dataProduct) => {

    try {
        const response = await apiClient.post(`v1/api/product/spu/create`, dataProduct, {
            headers: {
                "authorization": accessToken,
                "x-client-id": shopId
            }
        })
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}


