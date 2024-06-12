import { apiClient } from "../constant/api";

export const getVoucher = async (userId,shopId, accessToken) => {

    try {
        const response = await apiClient.get(`/v1/api/discount`, {
            params: {
                page:1,
                limit:50,
                shopId:shopId
            },

            headers: {
                "authorization": accessToken,
                "x-client-id": userId
            }
        },)
        console.log("$$ Data voucher:",response.data.data);
        return response.data.data
    } catch (error) {
        console.log(error)
        return null
    }
}