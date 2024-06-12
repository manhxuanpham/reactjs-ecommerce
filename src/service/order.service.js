import { apiClient } from "../constant/api";

import MESSAGE from './../utils/modal.message';

export const getOrder = async ( accessToken, userId) => {
    console.log("userid",userId)
    try {
        const response = await apiClient.get(`/v1/api/order`, {
            headers: {
                "authorization": accessToken,
                "x-client-id": userId
            }
        })

        console.log(response.data)
        return response.data.data
    } catch (error) {
        console.log(error)
        return null
    }
}