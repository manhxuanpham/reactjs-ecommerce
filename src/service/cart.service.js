import { apiClient } from "../constant/api";
import { useSelector } from "react-redux";
import { getCart, removeItemFromCart, addToCartSuccess } from "../redux/cartSlice";
import MESSAGE from './../utils/modal.message';

export const addToCart = async (product, accessToken, userId) => {

    try {
        const response = await apiClient.post(`/v1/api/cart`, product, {
            headers: {
                "authorization": accessToken,
                "x-client-id": userId
            }
        })
        MESSAGE("success", "Thông Báo", "Thêm vào giỏ hàng thành công")
        console.log("product request",product)
        console.log(response.data)
       // dispath(addToCartSuccess(response.data))
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}
export const getCartProducts = async (userId, accessToken,dispatch) => {

    try {
        const response = await apiClient.get(`v1/api/cart`, {
            params: {
                userId: userId
            },

            headers: {
                "authorization": accessToken,
                "x-client-id": userId
            }
        },)
        console.log(response.data.data[0].cart_products);
        dispatch(getCart(response.data.data[0]))
        console.log("get_cart_Success")
    } catch (error) {
        console.log(error)
        return null
    }
}
export const removeCartProduct = async (userId,productId, accessToken,dispatch) => {

    try {
        const response = await apiClient.delete(`v1/api/cart`, {
            data: {
                userId: userId,
                productId: productId
            },
            headers: {
                "authorization": accessToken,
                "x-client-id": userId
            }
        },)
        dispatch(removeItemFromCart(productId))
        console.log(response.data);
        console.log("delete_Success")
        MESSAGE("success","Thông báo", "Xóa thành công")
    } catch (error) {
        console.log(error)
        return null
    }
}
