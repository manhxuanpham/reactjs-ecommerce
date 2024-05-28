const Search = () => {
    return (
        <div>
            &lt;&gt;
            <div className="app__container">
                <div className="grid wide">
                    <div className="app__content">
                        <div className="col-3">
                            <nav className="category">
                                <div className="category__heading">
                                    <i className="category__heading-icon fa-solid fa-filter" />
                                    Bộ Lọc Tìm Kiếm
                                </div>
                                <span>Theo Danh mục</span>
                                {/* <ul class="category-list"> */}
                                <div>
                                    <input type="checkbox" />
                                    <span className="category-list__span">
                                        Máy ảnh và máy quay điện tử
                                    </span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <span className="category-list__span">Đồ nội thất</span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <span className="category-list__span">Đồ điện tử</span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <span className="category-list__span">Đồ gia dụng</span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <span className="category-list__span">Thời trang</span>
                                </div>
                                <div className="category-line" />
                                <span>Theo Nơi Bán</span>
                                <ul className="category-list">
                                    <div>
                                        <input type="checkbox" />
                                        <span className="category-list__span">Hà Nội</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" />
                                        <span className="category-list__span">
                                            Thành phố hồ chí minh
                                        </span>
                                    </div>
                                    <div>
                                        <input type="checkbox" />
                                        <span className="category-list__span">Đà nẵng</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" />
                                        <span className="category-list__span">Hưng Yên</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" />
                                        <span className="category-list__span">Hải Dương</span>
                                    </div>
                                    {/* </ul> */}
                                    <div className="category-line" />
                                    <span>Tình Trạng</span>
                                    <ul className="category-list">
                                        <div>
                                            <input type="checkbox" />
                                            <span className="category-list__span">Mới</span>
                                        </div>
                                        <div>
                                            <input type="checkbox" />
                                            <span className="category-list__span">Đã Sử Dụng</span>
                                        </div>
                                    </ul>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-9">
                            <div className="home__filter">
                                <div className="home-filter__label">Sắp xếp theo</div>
                                <button className="btn home-filetr__btn">Phổ Biến</button>
                                <button className="btn home-filetr__btn btn-primary">
                                    Mới Nhất
                                </button>
                                <button className="btn home-filetr__btn">Bán Chạy</button>
                                <div className="select-input">
                                    <span className="select-input__label">Giá</span>
                                    <i className="select-input__label-icon fas fa-angle-down" />
                                    <ul className="select-input__list">
                                        <li className="select-input-item">
                                            <a href className="select-input__link">
                                                Giá từ cao đến thấp
                                            </a>
                                        </li>
                                        <li className="select-input-item">
                                            <a href className="select-input__link">
                                                Giá từ thấp đến cao
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="home-filter__page">
                                    <div className="home-filter__page-num">
                                        <span className="home-filter__page-num-current">1</span>/14
                                    </div>
                                    <div className="home-filer__page-control">
                                        <a
                                            href
                                            className="home-filler__page-btn home-filler__page-btn__disable"
                                        >
                                            <i className="home-filler__page-btn__icon fas fa-angle-left" />
                                        </a>
                                    </div>
                                    <div className="home-filer__page-control">
                                        <a href className="home-filler__page-btn">
                                            <i className="home-filler__page-btn__icon fas fa-angle-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="home-product">
                                <div className="grid__row">
                                    {/* product item */}
                                    <div className="grid__column-2-4">
                                        <a className="home-product-item" href="product.html">
                                            <div
                                                className="home-product-item__img"
                                                style={{
                                                    backgroundImage:
                                                        "url(https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lftk9tf1knl6de_tn)",
                                                }}
                                            />
                                            <h4 className="home-product-item__name">
                                                [Mã FAMARAL1 giảm 10K đơn 50K] quần ống rộng suông
                                                lưng cao khóa trước 1 khuy vải tuyết mưa.
                                            </h4>
                                            <div className="home-product-item__price">
                                                <span className="home-product-item__price-current">
                                                    1.222.222
                                                </span>
                                                <span className="home-product-item__price-old">
                                                    999.999
                                                </span>
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
                            </div>
                            <ul className="pagination home-product__pagination">
                                <li className="panigation-item">
                                    <a href className="panigation-item__link">
                                        <i className="panigation-item__icon fas fa-angle-left" />
                                    </a>
                                </li>
                                <li className="panigation-item panigation-item__active">
                                    <a href className="panigation-item__link">
                                        1
                                    </a>
                                </li>
                                <li className="panigation-item">
                                    <a href className="panigation-item__link">
                                        2
                                    </a>
                                </li>
                                <li className="panigation-item">
                                    <a href className="panigation-item__link">
                                        3
                                    </a>
                                </li>
                                <li className="panigation-item">
                                    <a href className="panigation-item__link">
                                        4
                                    </a>
                                </li>
                                <li className="panigation-item">
                                    <a href className="panigation-item__link">
                                        5
                                    </a>
                                </li>
                                <li className="panigation-item">
                                    <a href className="panigation-item__link">
                                        ...
                                    </a>
                                </li>
                                <li className="panigation-item">
                                    <a href className="panigation-item__link">
                                        <i className="panigation-item__icon fas fa-angle-right" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
