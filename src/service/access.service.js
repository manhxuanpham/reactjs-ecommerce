import { date } from "yup";
import { apiClient } from "../constant/api";
import { loginError, loginStart, loginSuccess, 
    logoutError, logoutStart,logoutSuccess,
     registerError, registerStart, registerSuccess } from "../redux/authSlice";
import MESSAGE from "../utils/modal.message";
import { apiJWT } from "../constant/apiJWT";
export const login = async (user,dispatch,navigate) => {
    dispatch(loginStart());
    try {
        const response = await apiClient.post('/v1/api/shop/login',user)
        dispatch(loginSuccess(response.data))
        MESSAGE('success','Đăng Nhập','Đăng Nhập Thành Công')
        navigate("/")
        
    } catch (error) {
        dispatch(loginError())
        MESSAGE('error', 'Lỗi Đăng Nhập', 'Đăng Nhập Thất bại')

    }
}
export const register = async (user,dispatch,navigate) => {
    dispatch(registerStart());
    try {
        const response = await apiClient.post('/v1/api/shop/signup',user)
        dispatch(registerSuccess(response.data))
        navigate("/login")
        MESSAGE('success', 'Đăng Kí', 'Đăng Kí Thành Công')
        
    } catch (error) {
        dispatch(registerError())
    }
}

export const logout = async (user, dispatch, navigate) => {
   
    dispatch(logoutStart());
    try {
        
        const response = await apiJWT.post('/v1/api/shop/logout',{},{
            headers: {
                "authorization":user.data.tokens.accessToken,
                "x-client-id":user.data.shop._id
            }
        })
        dispatch(logoutSuccess())
        navigate("/")
        MESSAGE('success', 'Thông báo', 'Đăng Xuất Thành Công')

    } catch (error) {
        console.log(error);
        dispatch(logoutError())

    }
}
