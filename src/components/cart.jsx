const Cart = () => {
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
                        <div className="cart-item">
                            <div className="item-header">
                                <input
                                    style={{
                                        marginLeft: 20,
                                    }}
                                    type="checkbox"
                                    id="favorite"
                                />
                                <label htmlFor="favorite">Yêu thích+</label>
                                <span>Top 1 Sneaker</span>
                            </div>
                            <div className="item-body">
                                <input
                                    type="checkbox"
                                    style={{
                                        marginRight: 10,
                                    }}
                                />
                                <img
                                    src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh3a8oduhaer47"
                                    alt="Sneaker"
                                />
                                <div className="item-details">
                                    <h3>Giày Sneaker AlphaBounce Beyond [Fullbox + Bill]</h3>
                                    <span>Phân loại hàng: Đốm,41 1/3</span>
                                    <div className="item-price">₫449.000</div>
                                </div>
                                <div
                                    style={{
                                        marginLeft: 20,
                                    }}
                                    className="item-actions"
                                >
                                    <button>-</button>
                                    <input type="text" defaultValue={1} />
                                    <button>+</button>
                                </div>
                                <div
                                    style={{
                                        width: "15%",
                                        padding: 20,
                                    }}
                                    className="item-price_real"
                                >
                                    đ499.000
                                </div>
                                <div
                                    className="item-actions"
                                    style={{
                                        padding: 20,
                                    }}
                                >
                                    Xoá
                                </div>
                            </div>
                            <div className="item-footer">
                                <div className="cart_voucher-prices">
                                    <i className="fa-solid fa-ticket" />
                                    <div>
                                        Voucher giảm đến 10% <span>Mới</span>
                                    </div>
                                    <a href>Xem thêm voucher</a>
                                </div>
                                <div className="cart_voucher-delivery">
                                    <img
                                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/d9e992985b18d96aab90969636ebfd0e.png"
                                        alt
                                    />
                                    <span>
                                        Giảm ₫15.000 phí vận chuyển đơn tối thiểu ₫50.000; Giảm
                                        ₫25.000 phí vận chuyển đơn tối thiểu ₫99.000
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="item-header">
                                <input
                                    style={{
                                        marginLeft: 20,
                                    }}
                                    type="checkbox"
                                    id="favorite"
                                />
                                <label htmlFor="favorite">Yêu thích+</label>
                                <span>Top 1 Sneaker</span>
                            </div>
                            <div className="item-body">
                                <input
                                    type="checkbox"
                                    style={{
                                        marginRight: 10,
                                    }}
                                />
                                <img
                                    src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh3a8oduhaer47"
                                    alt="Sneaker"
                                />
                                <div className="item-details">
                                    <h3>Giày Sneaker AlphaBounce Beyond [Fullbox + Bill]</h3>
                                    <span>Phân loại hàng: Đốm,41 1/3</span>
                                    <div className="item-price">₫449.000</div>
                                </div>
                                <div
                                    style={{
                                        marginLeft: 20,
                                    }}
                                    className="item-actions"
                                >
                                    <button>-</button>
                                    <input type="text" defaultValue={1} />
                                    <button>+</button>
                                </div>
                                <div
                                    style={{
                                        width: "15%",
                                        padding: 20,
                                    }}
                                    className="item-price_real"
                                >
                                    đ499.000
                                </div>
                                <div
                                    className="item-actions"
                                    style={{
                                        padding: 20,
                                    }}
                                >
                                    Xoá
                                </div>
                            </div>
                            <div className="item-footer">
                                <div className="cart_voucher-prices">
                                    <i className="fa-solid fa-ticket" />
                                    <div>
                                        Voucher giảm đến 10% <span>Mới</span>
                                    </div>
                                    <a href>Xem thêm voucher</a>
                                </div>
                                <div className="cart_voucher-delivery">
                                    <img
                                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/d9e992985b18d96aab90969636ebfd0e.png"
                                        alt
                                    />
                                    <span>
                                        Giảm ₫15.000 phí vận chuyển đơn tối thiểu ₫50.000; Giảm
                                        ₫25.000 phí vận chuyển đơn tối thiểu ₫99.000
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="item-header">
                                <input
                                    style={{
                                        marginLeft: 20,
                                    }}
                                    type="checkbox"
                                    id="favorite"
                                />
                                <label htmlFor="favorite">Yêu thích+</label>
                                <span>Top 1 Sneaker</span>
                            </div>
                            <div className="item-body">
                                <input
                                    type="checkbox"
                                    style={{
                                        marginRight: 10,
                                    }}
                                />
                                <img
                                    src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh3a8oduhaer47"
                                    alt="Sneaker"
                                />
                                <div className="item-details">
                                    <h3>Giày Sneaker AlphaBounce Beyond [Fullbox + Bill]</h3>
                                    <span>Phân loại hàng: Đốm,41 1/3</span>
                                    <div className="item-price">₫449.000</div>
                                </div>
                                <div
                                    style={{
                                        marginLeft: 20,
                                    }}
                                    className="item-actions"
                                >
                                    <button>-</button>
                                    <input type="text" defaultValue={1} />
                                    <button>+</button>
                                </div>
                                <div
                                    style={{
                                        width: "15%",
                                        padding: 20,
                                    }}
                                    className="item-price_real"
                                >
                                    đ499.000
                                </div>
                                <div
                                    className="item-actions"
                                    style={{
                                        padding: 20,
                                    }}
                                >
                                    Xoá
                                </div>
                            </div>
                            <div className="item-footer">
                                <div className="cart_voucher-prices">
                                    <i className="fa-solid fa-ticket" />
                                    <div>
                                        Voucher giảm đến 10% <span>Mới</span>
                                    </div>
                                    <a href>Xem thêm voucher</a>
                                </div>
                                <div className="cart_voucher-delivery">
                                    <img
                                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/d9e992985b18d96aab90969636ebfd0e.png"
                                        alt
                                    />
                                    <span>
                                        Giảm ₫15.000 phí vận chuyển đơn tối thiểu ₫50.000; Giảm
                                        ₫25.000 phí vận chuyển đơn tối thiểu ₫99.000
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="total-cart">
                            <div className="total-cart_pickvoucher">
                                <div className="total-cart_title">
                                    <i className="fa-solid fa-ticket" />
                                    Shoppe Voucher
                                </div>
                                <a href>Chọn hoặc nhập mã</a>
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
                                        Chọn tất cả (7)
                                    </label>
                                    <a href>Xoá</a>
                                </div>
                                <div>
                                    <span className="cart_title-price">
                                        Tổng Thanh Toán (0 sản phẩm)
                                    </span>
                                    <span id="cart-total_prices" />
                                    <button id="btn_cart-total">Mua Hàng</button>
                                </div>
                            </div>
                        </div>
                        <div className="home_sugets_title">Bạn có thể thích</div>
                    </div>
                    <div className="grid__row">
                        {/* product item */}
                        <div className="grid__column-2-4">
                            <a className="home-product-item" href>
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
            </main>
        </>
    );
};

export default Cart;
