import { useEffect, useState } from "react"
import { getOrder } from './../../service/order.service';
import { useSelector } from 'react-redux';
import './order.scss'

const Order = () => {
    const user = useSelector(state => state.auth.login.currentUser)
    const accessToken = user?.data.tokens.accessToken
    const userId = user?.data.shop._id
    const [Order, setOrder] = useState([])


    useEffect(() => {
        const fetchData = async () => {

            setOrder(await getOrder(accessToken, userId))
        }
        fetchData()
    }, [])
    return (
        <>
            <div className="order__ap" style={{ backgroundColor: '#f8f8f8' }}>
                <div className="order-container">
                    <div className="order-header" style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#ffff' }}>
                        <div className="order-status order-status_active"><a>Tất cả</a></div>
                        <div className="order-status"><a>Chờ Xác Nhận</a></div>
                        <div className="order-status"><a>Vận Chuyển</a></div>
                        <div className="order-status"><a>Chờ Giao Hàng</a></div>
                        <div className="order-status"><a>Hoàn Thành</a></div>
                        <div className="order-status"><a>Đã Huỷ</a></div>
                        <div className="order-status"><a>Trả Hàng/Hoàn Tiền</a></div>
                    </div>
                    <div>
                        {Order.map((e, i) => (
                            <div key={i} className="order-body">
                                <p style={{ fontSize: 24 }}>Trạng Thái: <span style={{ color: '#d8531a' }}>{e.order_status}</span></p>
                                {
                                    e.order_products.map((e, i) => (
                                        <div key={i} className="order__product-details">
                                            <img src={e.thumb} alt="Product Image" className="order__product-image" />
                                            <div className="product-info">
                                                <span>{e.name}</span>
                                                <p>Phân loại hàng: {e.variation.map((e, i) => (<span key={i}>{e.option}</span>))}</p>
                                                <p>x{e.quantity}</p>
                                                
                                                <p className="product-price-new">{new Intl.NumberFormat().format(e.price)}₫</p>
                                            </div>
                                        </div>
                                    ))
                                }


                                <div className="order-summary" style={{ backgroundColor: '#ffff' }}>
                                    <p className="order-price">{new Intl.NumberFormat().format(e.order_checkout.totalPrice)}₫</p>
                                    <p className="order-total">Thành tiền:{new Intl.NumberFormat().format(e.order_checkout.totalCheckout)}₫</p>
                                </div>
                                <div className="order-actions">
                                    <button className="btn-confirm btn btn-primary">Đã Nhận Hàng</button>
                                    <button className="btn-return">Yêu Cầu Trả Hàng/Hoàn Tiền</button>
                                    <button className="btn-contact">Liên Hệ Người Bán</button>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>

        </>
    )
}

export default Order