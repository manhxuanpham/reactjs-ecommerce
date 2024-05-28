import axios from "axios";
import { useSelector } from "react-redux";
export const apiJWT = axios.create({
    baseURL: 'http://localhost:3052',

    //withCredentials: true, 
    // credentials:'inclue'

})
// apiJWT.interceptors.request.use(
//     async (request)=> {
//         const user = useSelector(state => state.auth.login.currentUser)
//         const accessToken = user?.data.tokens.accessToken
//         const userId = user?.data.shop._id
//         request = {
//             ...request,
//             headers: {
//                 'authorization': accessToken,
//                 'x-client-id': userId,
//                 "x-api-key": "c3c39a25885c11cb8c8b5797897bf5eb20c8589b2b78f40a19a7a241d2f37d126f1cfe6891eac4d19e4c8168e88ddc36289402e7533f476336e966771747ffdd"
//             }
//         }
//         return request
//     },
//     (err)=> {
//         return Promise.reject(err)
//     }
// )

// apiClient.interceptors.response.use(
//     function (response) {
//         // Thực thi các kịch bản cần thiết ở đây
//         // trước khi response đến điểm cuối

//         const { data } = response;
//         return {
//             data,
//         }; // ---> { "my_data": true }
//     },
//     function (error) {
//         // Thực thi đối với các phản hồi bị lỗi
//         // status code: 4xx, 5xx.
//         return Promise.reject(error);
//     },
// );