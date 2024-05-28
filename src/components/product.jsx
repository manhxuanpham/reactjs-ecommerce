import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProduct } from '../service/product.service';
import { useSelector } from "react-redux";
const Product = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({})
    // const user = useSelector(state => state.auth.login.currentUser)
    // const accessToken = user?.data.tokens.accessToken
    // const userId = user?.data.shop._id

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await getProduct(productId)
            console.log(res.data)
            setProduct(res.data);
        }
        fetchProduct()
    }, [])
    return (
        <div>
            &lt;&gt;
            <div className="app-container">
                <div className="grid wide">
                    {/* category  */}
                    <nav className="nav__path">
                        <a >Shopee</a>
                        <div className="larger-sign">&gt;</div>
                        <a >Voucher &amp; Dịch Vụ</a>
                        <div className="larger-sign">&gt;</div>
                        <a >Mã quà tặng Shopee</a>
                        <div className="larger-sign">&gt;</div>
                        <a >Khác</a>
                        <div className="larger-sign">&gt;</div>
                        <a >Gói Miễn Phí Vận Chuyển Xtra Plus (Freeship Xtra Plus)</a>
                    </nav>
                    {/*  */}
                    <div className="product-container">
                        <div className="product-image">
                            <img src="./assets/img/imgProductdetail.jfif" alt="Product Image" className="product-image_main" />
                            <div className="product-imgage_thumbnail">
                                <img src="./assets/img/imgProductdetail.jfif" />
                                <img src="./assets/img/imgProductdetail.jfif" />
                                <img src="./assets/img/imgProductdetail.jfif" />
                                <img src="./assets/img/imgProductdetail.jfif" />
                                <img src="./assets/img/imgProductdetail.jfif" />
                            </div>
                        </div>
                        <div className="product-info">
                            <div className="product-name">
                                {product?.spu_info?.product_name}
                            </div>
                            <div className="product-review">
                                <div className="product-rating item--separate">4.9★★★★☆</div>
                                <div className="product-evaluate item--separate">4.9K Đánh Giá</div>
                                <div className="product-weresell">21.7k Đã Bán</div>
                            </div>
                            <div className="product-price">
                                <div className="product-original-price">₫80.000</div>
                                <div className="product-price_sale">₫{new Intl.NumberFormat().format(product?.spu_info?.product_price)}</div>
                                <div className="product-price_salepercent">40% GIẢM</div>
                            </div>
                            <div className="voucher-container">
                                <div className="voucher-title">Mã Giảm Giá Của Shop</div>
                                <div className="voucher-item">Giảm 5k</div>
                                <div className="voucher-item">Giảm 5k</div>
                                <div className="voucher-item">5% GIẢM</div>
                                <div className="voucher-item">4% GIẢM</div>
                            </div>
                            {product?.spu_info?.product_variations?.map((e, i) => (
                                <div className="type-product" key={i}>
                                    <div className="title-type">{e.name}</div>
                                    <div className="color-options-container">
                                        {/* Repeat this block for each color option */}
                                        {e.options.map((o, i) => (
                                            <div key={i} className="color-option">
                                                <img src={e.img} alt="img" />
                                                <span className="color-name">{o}</span>
                                            </div>

                                        ))}
                                        {/* ... other color options ... */}

                                    </div>
                                </div>
                            ))}
                            {/* <div className="type-product_size">
                                <div className="size-title">Kích cỡ</div>
                                <div className="size-option_select">
                                    <div className="size-option">M</div>
                                    <div className="size-option">L</div>
                                    <div className="size-option">XL</div>
                                </div>
                            </div> */}
                            <div className="quantity-selector">
                                <label htmlFor="quantity">Số Lượng</label>
                                <button >-</button>
                                <input id="quantity" defaultValue={1} min={1} max={521} />
                                <button >+</button>
                                <span className="quantity-info">521 sản phẩm có sẵn</span>
                            </div>
                            <div className="action-buttons">
                                <button type="button">Thêm Vào Giỏ Hàng</button>
                                <button type="button">Mua Ngay</button>
                            </div>
                        </div>
                    </div>
                    <div className="shop-profile">
                        <img src="./assets/img/avtshop.jfif" alt="Shop Avatar" className="avatar" />
                        <div className="info">
                            <div className="name">Linh Nguyen - HOLY (Sỉ China)</div>
                            <div className="status">Online 4 Giờ Trước</div>
                            <div className="stats">
                                <div className="stat-item">
                                    Đánh Giá <span className="stat-value">97,1k</span>
                                </div>
                                <div className="stat-item">
                                    Sản Phẩm <span className="stat-value">1,8k</span>
                                </div>
                                <div className="stat-item">
                                    Tỉ Lệ Phản hồi <span className="stat-value">90%</span>
                                </div>
                                <div className="stat-item">
                                    Đã Tham Gia <span className="stat-value"> 7 năm trước</span>
                                </div>
                                {/* ...other stats... */}
                            </div>
                        </div>
                        <button className="action-button">Chat Ngay</button>
                    </div>
                    {/* Product detail */}
                    <div className="product-details">
                        <div className="product-details-header">CHI TIẾT SẢN PHẨM</div>
                        <table className="details-table">
                            <tbody>
                                {
                                    <tr>
                                        <th>Danh</th>
                                        <td>
                                            <a > Shopee </a> &gt;
                                            <a >  Thời Trang Nữ</a> &gt;
                                            <a >  Áo len &amp; Cardigan </a>
                                        </td>
                                    </tr>
                                }

                                {/* ... more details ... */}
                            </tbody></table>
                        <div className="product-details-header">MÔ TẢ SẢN PHẨM</div>
                        <p>⚠️Lưu ý: Đây là hàng hàng nhà máy Quảng Châu. Len Quảng Châu thì xịn khỏi nói. Chất len mềm mịn, đanh tay, ko bai ko xù như len xưởng VN gia công 😎
                        </p><p>
                            🚫 Shop ko bán hàng xưởng VN gia công ❌❌❌
                        </p>
                        <p>
                            Áo thiết kế ôm gọn cổ, giữ ấm tốt mà không gây vướng như các loại áo len cao cổ thông thường. Đặc biệt, len phần cổ có đường gân nhỏ hơn phần thân, tăng tính thẩm mỹ cho sản phẩm 😍
                        </p>
                        <p />
                        <p>
                            💥LƯU Ý:
                        </p><p>Hàng sẽ về trong vòng 5-10 ngày, trường hợp tắc biên sẽ chậm hơn 1 chút. Vì vậy, trong vòng 15 ngày kể từ ngày đặt hàng, các bạn vui lòng KHÔNG HỦY ĐƠN nhé.</p>❌
                        <p>❌Chỉ hoàn trả hàng với các trường hợp: Sai mẫu mã, size, sp lỗi do nhà sản xuất. Các trường hợp còn lại shop ko nhận đổi trả ạ.</p>
                        <p />
                    </div>
                    {/* Product review */}
                    <div className="review-container">
                        <div className="review-header">ĐÁNH GIÁ SẢN PHẨM</div>
                        <div className="review-summary">
                            <div className="review-tile">
                                <div className="review-rating">4.9 trên 5</div>
                                <div className="review-stars">★★★★★</div>
                            </div>
                            <div className="review-filter">
                                <button className="filter-button ">Tất Cả</button>
                                <button className="filter-button">5 Sao (4,4k)</button>
                                <button className="filter-button ">4 sao( 1,9k)</button>
                                <button className="filter-button">3 Sao (4,4k)</button>
                                <button className="filter-button ">2 sao (500)</button>
                                <button className="filter-button">1 sao (19) (4,4k)</button>
                                <button className="filter-button ">Có Hình Ảnh/ Video (5,9k)</button>
                                <button className="filter-button">Có bình luận(4,4k)</button>
                                {/* ...other filter buttons... */}
                            </div>
                        </div>
                        <div className="user-review">
                            <div className="user-info">
                                <img src="./assets/img/avtreviewproduct.jfif" alt="User Avatar" className="user-avatar" width={50} />
                                <div className="user-name">nguyenthithuytien001</div>
                            </div>
                            <div className="user-review_stars">★★★★★</div>
                            <div className="review-date">2021-02-01 17:40 | Phân loại hàng: Cafe,Free size</div>
                            <div className="review-text">
                                Áo dày mỏng vừa phải, rất thích hợp mọi người. Màu sáng cực ý. Mặc ôm rất đẹp luôn. Ship nhanh nữa. Thích cả màn. Chất vải mình co dãn tốt nhà mình.
                            </div>
                            <div className="review-images">
                                {/* Insert review images here */}
                                <img src="./assets/img/review-product.webp" alt="Review Image" />
                                {/* ...other images... */}
                                <img src="./assets/img/review-product.webp" alt="Review Image" />
                                {/* ...other images... */}
                                <img src="./assets/img/review-product.webp" alt="Review Image" />
                                {/* ...other images... */}
                                <img src="./assets/img/review-product.webp" alt="Review Image" />
                                {/* ...other images... */}
                                <img src="./assets/img/review-product.webp" alt="Review Image" />
                                {/* ...other images... */}
                            </div>
                            <div className="like-count ">
                                <i className="fa-solid fa-thumbs-up" />
                                31</div>
                        </div>

                        {/* ...other reviews... */}
                    </div>
                    {/* Pagesize */}
                    <ul className="pagination home-product__pagination">
                        <li className="panigation-item">
                            <a className="panigation-item__link">
                                <i className="panigation-item__icon fas fa-angle-left" />
                            </a>
                        </li>
                        <li className="panigation-item panigation-item__active">
                            <a className="panigation-item__link">1</a>
                        </li>
                        <li className="panigation-item">
                            <a className="panigation-item__link">2</a>
                        </li>
                        <li className="panigation-item">
                            <a className="panigation-item__link">3</a>
                        </li>
                        <li className="panigation-item">
                            <a className="panigation-item__link">4</a>
                        </li>
                        <li className="panigation-item">
                            <a className="panigation-item__link">5</a>
                        </li>
                        <li className="panigation-item">
                            <a className="panigation-item__link">...</a>
                        </li>
                        <li className="panigation-item">
                            <a className="panigation-item__link">
                                <i className="panigation-item__icon fas fa-angle-right" />
                            </a>
                        </li>
                    </ul>
                    <div className="suggets-product_title">CÁC SẢN PHẨM KHÁC CỦA SHOP</div>
                    {/* Suggets Product */}
                    <div className="grid__row">
                        {/* product item */}
                        <div className="grid__column-2-4">
                            <a className="home-product-item" >
                                <div className="home-product-item__img" style={{ backgroundImage: 'url(https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lftk9tf1knl6de_tn)' }} />
                                <h4 className="home-product-item__name">
                                    [Mã FAMARAL1 giảm 10K đơn 50K] quần ống rộng suông lưng
                                    cao khóa trước 1 khuy vải tuyết mưa.
                                </h4>
                                <div className="home-product-item__price">
                                    <span className="home-product-item__price-current">1.222.222</span>
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
                                        <span className="home-product-item__brand home-product-item__brand-color">Đã bán 118,5k</span>
                                    </div>
                                    <div className="home-product-item__origin">
                                        <div className="home-product-item__origin-name">
                                            Hà Nội
                                        </div>
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
                    <div className="product-btnViewMore">
                        <button> Xem Thêm</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product