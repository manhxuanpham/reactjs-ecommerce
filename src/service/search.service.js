import { apiClient } from "../constant/api";
import { useSelector } from "react-redux";
import MESSAGE from "../utils/modal.message";
import { search } from "../redux/searchSlice";
export const searchProduct = async (wordSearch,dispatch, navigate) => {

    try {
        const response = await apiClient.get(`/v1/api/product/search/${wordSearch}`)
        dispatch(search(response.data.data))
        navigate(`/search/${wordSearch}`)
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export const searchProductv2 = async (wordSearch,page =1,skip,limit=50, dispatch, navigate) => {

    try {
        const response = await apiClient.get(`/v1/api/product/search/${wordSearch}`,{
            params:{
                page:page,
                skip:skip,
                limit:limit
            }
        })
        dispatch(search(response.data.data))
        navigate(`/search/${wordSearch}`)
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}

