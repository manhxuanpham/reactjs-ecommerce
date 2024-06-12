import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartProducts, removeCartProduct } from "../../service/cart.service";
import { Button, Modal } from 'antd';
import './cart.scss'
import { getVoucher } from "../../service/voucher.service";
import { checkoutReview } from "../../service/checkout.service";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.login.currentUser)
    const accessToken = user?.data.tokens.accessToken
    const userId = user?.data.shop._id
    const cartProducts = useSelector(state => state.cart.cartItem.cart_products)
    const cartUserId = useSelector(state => state.cart.cartItem.cart_userId)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVoucher, setSelectedVoucher] = useState({});
    const [CheckOut, setCheckOut] = useState({
        cartId: cartUserId,
        userId: userId,
        shop_order_ids: []
    });
    const [Vouchers, setGetVouchers] = useState([]);
    const showModal = (shopId) => {
        setIsModalOpen(true);
        handleGetVoucher(shopId)
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    useEffect(() => {
        async function fetchData() {
            await getCartProducts(userId, accessToken, dispatch);
            // setCartProducts(products.data[0].cart_products);
            // console.log("cartProducts", cartProducts);

        }
        fetchData();

    }, [])
    const handleRemoveProduct = async (userId, productId) => {
        await removeCartProduct(userId, productId, accessToken, dispatch)
    }

    
    const handleGetVoucher = async (shopId) => {
        let res = await getVoucher(userId, shopId, accessToken)
        setGetVouchers(res)
        console.log("Voucher", Vouchers)
    }
    const handleSelectProduct = (product) => {
        setSelectedProducts(currentSelectedProducts => {
            const index = currentSelectedProducts.findIndex(p => p.product_id === product.product_id);
            if (index > -1) {
                // Nếu sản phẩm đã được chọn, loại bỏ nó khỏi mảng
                return currentSelectedProducts.filter(p => p.product_id !== product.product_id);
            } else {
                // Nếu sản phẩm chưa được chọn, thêm vào mảng
                return [...currentSelectedProducts, product];
            }
        });
        // xử lý data trước khi checkout
        setCheckOut(prevCheckOut => {
            const shopIndex = prevCheckOut.shop_order_ids.findIndex(p => p.shopId === product.product_shop_id);
            if (shopIndex > -1) {
                // Shop đã tồn tại trong danh sách
                const newShopOrderIds = [...prevCheckOut.shop_order_ids];
                const currentShop = newShopOrderIds[shopIndex];

                const productIndex = currentShop.item_products.findIndex(p => p.productId === product.product_id);
                if (productIndex > -1) {
                    // Sản phẩm đã tồn tại, loại bỏ sản phẩm
                    currentShop.item_products.splice(productIndex, 1);

                    if (currentShop.item_products.length === 0) {
                        // Nếu không còn sản phẩm nào trong shop, xóa cả shop
                        newShopOrderIds.splice(shopIndex, 1);
                    }
                } else {
                    // Sản phẩm chưa tồn tại, thêm sản phẩm mới
                    currentShop.item_products.push({
                        price: product.product_price,
                        quantity: product.product_quantity,
                        productId: product.product_id,
                        sku_id: product.sku_id
                    });
                }
                return { ...prevCheckOut, shop_order_ids: newShopOrderIds };
            } else {
                // Shop chưa tồn tại, tạo mới shop và thêm sản phẩm
                const newShopOrder = {
                    shopId: product.product_shop_id,
                    shop_discounts: [{
                        discount_code:selectedVoucher.discount_code ||undefined,
                        discount_id: selectedVoucher._id || undefined,
                        shop_id: selectedVoucher.discount_shop_id || undefined
                    }],
                    item_products: [{
                        price: product.product_price,
                        quantity: product.product_quantity,
                        productId: product.product_id,
                        sku_id: product.sku_id
                    }]
                };
                return { ...prevCheckOut, shop_order_ids: [...prevCheckOut.shop_order_ids, newShopOrder] };
            }
        });
    }
    const handleCheckoutReview = () => {
        checkoutReview(CheckOut, accessToken, userId, dispatch, navigate)
       
       
    }
    return (
        <>
            <main className="app_cart_container">
                <div className="grid wide">
                    <div className="app_cart_content">
                        <div className="title_voucher">
                            <div className="img_voucher" />
                            <div>
                                Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển
                                bạn nhé!
                            </div>
                        </div>
                        <div className="menu">
                            <div className="menu-item">
                                <input
                                    style={{
                                        marginLeft: 10,
                                    }}
                                    type="checkbox"
                                />
                                <span>Sản Phẩm</span>
                            </div>
                            <div style={{ width: "15%" }} className="menu-item">
                                Đơn Giá
                            </div>
                            <div style={{ width: "15%" }} className="menu-item">
                                Số Lượng
                            </div>
                            <div style={{ width: "15%" }} className="menu-item">
                                Số Tiền
                            </div>
                            <div style={{ width: "15%" }} className="menu-item">
                                Thao Tác
                            </div>
                        </div>
                        {cartProducts?.map(product => (
                            <div className="cart-item">
                                <div className="item-header">
                                    <input
                                        style={{
                                            marginLeft: 20,
                                        }}
                                        type="checkbox"
                                        id="favorite"
                                        checked={selectedProducts.some(p => p.product_id === product.product_id)}
                                    />
                                    <label htmlFor="favorite">Yêu thích+</label>
                                    <span>{product.product_shop_id}</span>
                                </div>
                                <div className="item-body">
                                    <input
                                        type="checkbox"
                                        style={{
                                            marginRight: 10,
                                        }}
                                        checked={selectedProducts.some(p => p.product_id === product.product_id)}
                                        onChange={() => handleSelectProduct(product)}
                                    />
                                    <img
                                        src={product?.product_thumb}
                                        alt="Sneaker"
                                    />
                                    <div className="item-details">
                                        <h3>{product?.product_name}</h3>
                                        <span>Phân loại hàng: {Object.entries(product?.product_variations).map(([key, value], index) => (
                                            <span key={index}> {value}</span>
                                        ))}</span>
                                        <div className="item-price">₫{new Intl.NumberFormat().format(product?.product_price)}</div>
                                    </div>
                                    <div
                                        style={{
                                            marginLeft: 20,
                                        }}
                                        className="item-actions"
                                    >
                                        <button>-</button>
                                        <input type="number" value={product.product_quantity} />
                                        <button>+</button>
                                    </div>
                                    <div
                                        style={{
                                            width: "15%",
                                            padding: 20,
                                        }}
                                        className="item-price_real"
                                    >
                                        đ{new Intl.NumberFormat().format(product?.product_price * product?.product_quantity)}
                                    </div>
                                    <div
                                        onClick={() => handleRemoveProduct(userId, product.product_id)}
                                        className="item-actions"
                                        style={{
                                            padding: 20,
                                            cursor: "pointer",
                                        }}
                                    >
                                        Xoá
                                    </div>
                                </div>
                                <div className="item-footer">
                                    <div className="cart_voucher-prices">
                                        <i className="fa-solid fa-ticket" />
                                        <div>
                                            {selectedVoucher && (
                                                <span>Voucher giảm đến {selectedVoucher?.discount_value} {selectedVoucher?.discount_type === "percentage" ? "%" : "đ"}</span>
                                            )}

                                        </div>
                                        <a onClick={() => showModal(product.product_shop_id)}  >Xem thêm voucher</a>
                                        <>

                                            <Modal title="Voucher" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                                <div className="vouchers">
                                                    {Vouchers.map((voucher, index) => (
                                                        <div key={index} className="voucher">
                                                            <label htmlFor="voucher">
                                                                <input type="radio" onChange={() => { setSelectedVoucher(voucher) }} name={voucher.discount_code} value={voucher.id} />

                                                                {voucher.discount_code}
                                                            </label>
                                                            <p>
                                                                Mô  tả: {voucher.discount_description}

                                                            </p>
                                                            <p>
                                                                Giảm :{voucher.discount_value} {voucher.discount_type == "percentage" ? "%" : "đ"}
                                                            </p>

                                                        </div>


                                                    ))}
                                                </div>
                                            </Modal>
                                        </>
                                    </div>
                                    <div className="cart_voucher-delivery">
                                        <img
                                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/d9e992985b18d96aab90969636ebfd0e.png"
                                            alt="img"
                                        />
                                        <span>
                                            Giảm ₫15.000 phí vận chuyển đơn tối thiểu ₫50.000; Giảm
                                            ₫25.000 phí vận chuyển đơn tối thiểu ₫99.000
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}


                        <div className="total-cart">
                            <div className="total-cart_pickvoucher">
                                <div className="total-cart_title">
                                    <i className="fa-solid fa-ticket" />
                                    Shoppe Voucher
                                </div>
                                <a  >Chọn hoặc nhập mã</a>
                            </div>
                            <div className="total-decrease">
                                <span>Số Tiền giảm</span>
                                <div> -0đ</div>
                            </div>
                            <div className="total-cart_action">
                                <div>
                                    <input type="checkbox" name id />
                                    <label
                                        style={{
                                            fontSize: 20,
                                        }}
                                        htmlFor
                                    >
                                        Chọn tất cả ({cartProducts?.length})
                                    </label>
                                    <a >Xoá</a>
                                </div>
                                <div>
                                    <span className="cart_title-price">
                                        Tổng Thanh Toán ({selectedProducts.length} sản phẩm)
                                    </span>
                                    <span id="cart-total_prices" />{new Intl.NumberFormat().format(selectedProducts.reduce((acc, product) => acc + product.product_price * product.product_quantity, 0))}đ
                                    <button onClick={handleCheckoutReview} id="btn_cart-total">Mua Hàng</button>
                                </div>
                            </div>
                        </div>
                        <div className="home_sugets_title">Bạn có thể thích</div>
                    </div>
                    <div className="grid__row">
                        {/* product item */}
                        <div className="grid__column-2-4">
                            <a className="home-product-item" >
                                <div
                                    className="home-product-item__img"
                                    style={{
                                        backgroundImage:
                                            "url(https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lftk9tf1knl6de_tn)",
                                    }}
                                />
                                <h4 className="home-product-item__name">
                                    [Mã FAMARAL1 giảm 10K đơn 50K] quần ống rộng suông lưng cao khóa
                                    trước 1 khuy vải tuyết mưa.
                                </h4>
                                <div className="home-product-item__price">
                                    <span className="home-product-item__price-current">
                                        1.222.222
                                    </span>
                                    <span className="home-product-item__price-old">999.999</span>
                                </div>
                                <div className="home-product-item__action">
                                    <span className="home-product-item__like home-product-item__liked">
                                        <i className="home-product-item__like-empty fa-regular fa-heart" />
                                        <i className="home-product-item__like-fill fa-solid fa-heart" />
                                    </span>
                                    <div className="home-product-item__rating">
                                        <i className="fa-solid fa-star home-product-item__rating-1" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <span className="home-product-item__brand home-product-item__brand-color">
                                            Đã bán 118,5k
                                        </span>
                                    </div>
                                    <div className="home-product-item__origin">
                                        <div className="home-product-item__origin-name">Hà Nội</div>
                                    </div>
                                    <div className="home-product-item__favourite">
                                        <i className="fa-solid fa-check" />
                                        Yêu Thích
                                    </div>
                                    <div className="home-product-item__sale-off">
                                        <div className="home-product-item__sale-off-percent">
                                            10%
                                        </div>
                                        <div className="home-product-item__sale-off-label">
                                            GIẢM
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </main >
        </>
    );
};

export default Cart;
