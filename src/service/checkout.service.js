import { apiClient } from "../constant/api";

import { getCheckout } from "../redux/checkoutSlice";
import { updateAddress } from "../redux/userAddressSlice";
import MESSAGE from './../utils/modal.message';
import Checkout from './../components/checkout/checkout';

export const checkoutReview = async (checkout, accessToken, userId, dispatch,navigate) => {
    console.log("checkout request", checkout)

    try {
        const response = await apiClient.post(`/v1/api/checkout`, checkout, {
            headers: {
                "authorization": accessToken,
                "x-client-id": userId
            }
        })

        console.log(response.data)
        dispatch(getCheckout(response.data))
        navigate('/checkout')
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export const updateUserAddress = async(userAddress,dispatch) => {
    dispatch(updateAddress(userAddress))
    MESSAGE('success','thông báo','cập nhật thông tin thành công')
}

export const CheckoutSubmit = async (checkout, accessToken, userId, navigate) => {
    console.log("checkoutsubmit request", checkout)

    try {
        const response = await apiClient.post(`/v1/api/order`, checkout, {
            headers: {
                "authorization": accessToken,
                "x-client-id": userId
            }
        })

        console.log("order success",response.data)
        navigate('/order')
        MESSAGE('success','thông báo','Đặt Hàng Thành Công')
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}