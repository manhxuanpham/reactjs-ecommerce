import { apiClient } from "../constant/api";
import FormData from 'form-data'

export const uploadImage = async (accessToken, userId, file) => {
    const formData = new FormData();
    formData.append('image', file);
    try {
        const response = await apiClient.post('/v1/api/upload/product', formData,{
            headers: {
                'authorization':accessToken,
                'x-client-id':userId,
                
            },

        })

        console.log("Upload response:", response.data);
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}