const Checkout = () => {
    return (
        <>
            <div className="Order__container" style={{ backgroundColor: '#f8f8f8' }}>
                <div className="grid wide">
                    <div className="address" style={{ border: '1px solid #f05d1f', padding: '25px 20px', backgroundColor: '#ffff' }}>
                        <p style={{ color: '#f05d1f', fontSize: 20 }}> <i style={{ color: '#f05d1f' }} className="fa-solid fa-location-dot" />
                            Địa Chỉ Nhận Hàng</p>
                        <span style={{ fontWeight: 'bold' }}>Họ Tên:{'{'}{'{'}$user-&gt;info-&gt;name{'}'}{'}'} ,SĐT:{'{'}{'{'}$user-&gt;info-&gt;phone_number{'}'}{'}'}</span>
                        <span>Địa Chỉ:{'{'}{'{'}$user-&gt;info-&gt;address{'}'}{'}'}</span>
                        <button style={{ float: 'right', marginRight: 30, backgroundColor: '#ffff', color: 'blue', border: 'none', cursor: 'pointer' }}>Thay Đổi</button>
                        <div className="container">
                            <h2>Địa chỉ mới</h2>
                            <div className="form-group">
                                <label htmlFor="fullName">Họ và tên</label>
                                <input type="text" id="fullName" placeholder="Nhập họ và tên" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Số điện thoại</label>
                                <input type="text" id="phone" placeholder="Nhập số điện thoại" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Địa chỉ cụ thể</label>
                                <input type="text" id="address" placeholder="Nhập địa chỉ " />
                            </div>
                            <div className="form-group">
                                <button type="button">Hoàn thành</button>
                            </div>
                        </div>
                    </div>
                    <div className="products">
                        {/* Repeat this block for each product */}
                        {/* <div class="product">
        <img src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh3a8oduhaer47_tn.jpg" alt="Product Image">
        <div class="product-details">
          <h4>Giày Sneaker Alphabounce Beyond Fullbox</h4>
          <div>Loại: Dáng, 41 1/3</div>
          <div>Đơn Giá: ₫449.000</div>
          <div>Số Lượng: 1</div>
          <div>Thành Tiền :₫449.000</div>
        </div>
      </div> */}
                        <div className="menu">
                            <div className="menu-item">
                                <span>Sản Phẩm</span>
                            </div>
                            <div style={{ width: '15%' }} className="menu-item">Đơn Giá</div>
                            <div style={{ width: '15%' }} className="menu-item">Số Lượng</div>
                            <div style={{ width: '15%' }} className="menu-item">Thành Tiền</div>
                        </div>
                        <div id="menu">
                        </div>
                        {/* End of product block */}
                    </div>
                    <div className="checkout" style={{ backgroundColor: '#ffff' }}>
                        <textarea placeholder="Lưu ý cho Người bán..." defaultValue={""} />
                        <div className="shipping">
                            <span>Đơn vị vận chuyển:</span>
                            <span>Nhanh</span>
                        </div>
                        <div className="total">
                            <span>Tổng số tiền :</span>
                            <span> </span>
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
                            <span>Tổng tiền hàng</span>
                            <span id="totalprice">đ</span>
                        </div>
                        <div className="item">
                            <span>Phí vận chuyển</span>
                            <span>₫</span>
                        </div>
                        <div className="item">
                            <span>Tổng cộng Voucher giảm giá:</span>
                            <span>-</span>
                        </div>
                        <div className="item total">
                            <span>Tổng thanh toán</span>
                            <span style={{ color: '#f05d1f' }} />
                        </div>
                        <button id="btn-order" className="btn btn-primary">Đặt hàng</button>
                        <p>Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo Điều khoản Shopee</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Checkout