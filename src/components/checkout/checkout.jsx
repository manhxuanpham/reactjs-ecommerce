import { useEffect ,useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { date } from 'yup';
import './checkout.scss'
import { useState } from 'react';
import { Field, Formik } from 'formik';
import * as Yup from "yup";
import { CheckoutSubmit, updateUserAddress } from '../../service/checkout.service';
import { Button, Form, Input, Modal, Radio } from 'antd';
import { ErrorMessage } from 'formik';
import AddressModal from './Address.modal';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const Checkout = useSelector((state) => state.checkout.checkoutItem)
    const user = useSelector(state => state.auth.login.currentUser)
    const accessToken = user?.data.tokens.accessToken
    const userId = user?.data.shop._id
    const cartUserId = useSelector(state => state.cart.cartItem.cart_userId)
    const name = useSelector(state => state.userAddress?.user_address.name);
    const numberPhone = useSelector(state => state.userAddress?.user_address.numberPhone);
    const address = useSelector(state => state.userAddress?.user_address.address);
    const checkoutOrder = Checkout?.data?.checkout_order
    const products = Checkout?.data?.shop_order_ids_new[0]

    const shop_order_ids_new = Checkout?.data?.shop_order_ids_new

    const userAddress =  useSelector(state => state.userAddress?.user_address)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false);
    //  const showModal = () => {
    //     setIsModalOpen(true);
     
    // };
    // const handleOk = () => {
    //     setIsModalOpen(false);
        
    // };
    // const handleCancel = () => {
    //     setIsModalOpen(false);

    // };
    //antd modal form
    const [form] = Form.useForm();
    const [formValues, setFormValues] = useState();
    const [open, setOpen] = useState(false);

    const onCreate = (values) => {
        console.log('Received values of form: ', values);
      //  setFormValues(values);
        setOpen(false);
        updateUserAddress(values,dispatch)

    };
    const handleCancel = () => {
        setOpen(false);
    };
    const handleSubmitCheckout = ()=> {
        let dataOrder = {
            cartId: cartUserId,
            userId:userId,
            user_address:userAddress,
            user_payment:{payment:"thanh toán khi nhận hàng"},
            shop_order_ids_new: shop_order_ids_new,
            checkout_order:checkoutOrder
        }
        CheckoutSubmit(dataOrder,accessToken,userId,navigate)
    }



    return (
        <>
            <div className="Order__container" style={{ backgroundColor: '#f8f8f8' }}>
                <div className="grid wide">
                    
                    {/* <pre>{JSON.stringify(formValues, null, 2)}</pre> */}

                    <AddressModal open={open} onCreate={onCreate} onCancel={handleCancel} />

                    <div className="address" style={{ border: '1px solid #f05d1f', padding: '25px 20px', backgroundColor: '#ffff' }}>
                        <p style={{ color: '#f05d1f', fontSize: 20 }}> <i style={{ color: '#f05d1f' }} className="fa-solid fa-location-dot" />
                            Địa Chỉ Nhận Hàng</p>
                        <span style={{ fontWeight: 'bold' }}>Họ Tên:{name} ,SĐT:{numberPhone}</span>
                        <span>Địa Chỉ:{address}</span>
                        <button onClick={() => setOpen(true)} style={{ float: 'right', marginRight: 30, backgroundColor: '#ffff', color: 'blue', border: 'none', cursor: 'pointer' }}>Thay Đổi</button>
                        
                    </div>
                    <div className="products">
                        <div className="menu">
                            <div className="menu-item">
                                <span>Sản Phẩm</span>
                            </div>
                            <div style={{ width: '15%' }} className="menu-item">Đơn Giá</div>
                            <div style={{ width: '15%' }} className="menu-item">Số Lượng</div>
                            <div style={{ width: '15%' }} className="menu-item">Thành Tiền</div>
                        </div>
                        {shop_order_ids_new.map(order => (

                            <div className="cart-item" >

                                <div className="item-header">
                                    <label htmlFor="favorite">Yêu thích+</label>
                                    <span>{order.shopId}</span>
                                </div>
                                {order.item_products.map(product=> (
                                    <>
                                        <div className="item-body">

                                            <img src={product.thumb} alt="Sneaker" />
                                            <div className="item-details">
                                                <h3>{product.name}</h3>
                                                <span> Phân Loại:{
                                                    product.variation.map((e, i) =>
                                                        (<span>{e.option}</span>))}
                                                </span>
                                                <div className="item-price">
                                                    đ{new Intl.NumberFormat().format(product.price)}
                                                </div>

                                            </div>
                                            <div style={{ marginTop: "-20px", marginLeft: "150px" }} className="item-actions">
                                                {product.quantity}

                                            </div>
                                            <div style={{ marginTop: "-20px", width: '15%', padding: '20px' }} className="item-price_real">
                                                đ{new Intl.NumberFormat().format(product.price * product.quantity)}
                                            </div>

                                        </div>
                                        <div className="item-footer">
                                            <div className="cart_voucher-prices">

                                                <i className="fa-solid fa-ticket"></i>

                                                <a href="">Voucher </a>
                                            </div>
                                            {/* <div className="cart_voucher-delivery">
                                        <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/d9e992985b18d96aab90969636ebfd0e.png"></img>
                                        <span>
                                            {<span>Voucher giảm  {selectedVoucher?.discount_value} {selectedVoucher?.discount_type === "percentage" ? "%" : "đ"}</span>}
                                        </span>
                                    </div> */}
                                        </div>
                                    </>
                                ))}
                                

                                {/* End of product block */}
                            </div>
                        ))}    
                       
                        <div className="checkout" style={{ backgroundColor: '#ffff' }}>
                            <textarea placeholder="Lưu ý cho Người bán..." defaultValue={""} />
                            <div className="shipping">
                                <span>Đơn vị vận chuyển: {checkoutOrder.feeShip} đ</span>
                                <span> Nhanh</span>
                            </div>
                            <div className="total">
                                <span>Tổng số tiền :{new Intl.NumberFormat().format(checkoutOrder.totalCheckout) } đ</span>
                            
                            </div>
                        </div>
                        <div className="payment-method" style={{ backgroundColor: '#ffff' }}>
                            <h2>Phương thức thanh toán</h2>
                            <button style={{ border: 'none', backgroundColor: '#ffff', width: 300, height: 50 }}>Ví ShopeePay</button>
                            <button style={{ border: 'none', backgroundColor: '#ffff', width: 300, height: 50 }}>Thẻ Tín dụng/Ghi nợ</button>
                            <button style={{ border: '1px solid #f05d1f', backgroundColor: '#ffff', width: 300, height: 50 }}>Thanh toán khi nhận hàng</button>
                            <p>Phí thu hộ: 0 VND. Ưu đãi về phí vận chuyển (nếu có) áp dụng cả với phí thu hộ.</p>
                        </div>
                        <div className="order-summary" style={{ backgroundColor: '#ffff' }}>
                            <h3>Thông tin đơn hàng</h3>
                            <div className="item">
                                <span>Tổng tiền hàng </span>
                                <span id="totalprice">{new Intl.NumberFormat().format(checkoutOrder.totalPrice)}đ</span>
                            </div>
                            <div className="item">
                                <span>Phí vận chuyển {checkoutOrder.feeShip}</span>
                                <span>₫</span>
                            </div>
                            <div className="item">
                                <span>Tổng cộng Voucher giảm giá: - {new Intl.NumberFormat().format(checkoutOrder.totalDiscount)}</span>
                                
                            </div>
                            <div className="item total">
                                <span>Tổng thanh toán {new Intl.NumberFormat().format(checkoutOrder.totalCheckout)}</span>
                                <span style={{ color: '#f05d1f' }} />
                            </div>
                            <button onClick={handleSubmitCheckout} id="btn-order" className="btn btn-primary">Đặt hàng</button>
                            <p>Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo Điều khoản Shopee</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
           )
}

export default Checkout