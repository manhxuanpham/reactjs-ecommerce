const Order = () => {
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
                        @foreach ($orders as $order)
                        <div className="order-body">
                            <p style={{ fontSize: 24 }}>Trạng Thái: <span style={{ color: '#d8531a' }}>{'{'}{'{'}$order-&gt;invoice_state{'}'}{'}'}</span></p>
                           
                            <div className="order__product-details">
                                <img src="{{ asset('storage/' . $detail->productSku->img) }}" alt="Product Image" className="order__product-image" />
                                <div className="product-info">
                                    <span>{'{'}{'{'} $detail-&gt;productSku-&gt;product-&gt;product_name {'}'}{'}'}</span>
                                    <p>Phân loại hàng: {'{'}{'{'} $detail-&gt;productSku-&gt;sku {'}'}{'}'}</p>
                                    <p>x{'{'}{'{'} $detail-&gt;product_quantity {'}'}{'}'}</p>
                                    {/* <p class="product-price-old">179.000₫</p> */}
                                    <p className="product-price-new">{'{'}{'{'} number_format($detail-&gt;productSku-&gt;price *$detail-&gt;product_quantity, 0, '.', ',') {'}'}{'}'}₫</p>
                                </div>
                            </div>
                     
                            <div className="order-summary" style={{ backgroundColor: '#ffff' }}>
                                <p className="order-total">Thành tiền:{'{'}{'{'}$order-&gt;Total{'}'}{'}'}₫</p>
                            </div>
                            <div className="order-actions">
                                <button className="btn-confirm btn btn-primary">Đã Nhận Hàng</button>
                                <button className="btn-return">Yêu Cầu Trả Hàng/Hoàn Tiền</button>
                                <button className="btn-contact">Liên Hệ Người Bán</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default Order