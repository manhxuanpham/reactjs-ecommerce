import Slideshow from "./slideshow";
import { getProducts, getCategories } from "../service/home.service";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
    const [Products, setProducts] = useState([]);
    const [Categories, setCategories] = useState([]);
    const navigate = useNavigate()

    const user = useSelector(state => state.auth.login?.currentUser)
    useEffect(() => {

        async function fetchData() {
            const products = await getProducts();
            const categories = await getCategories();
            setProducts(products.data);
            setCategories(categories.data);
            console.log("p$$", products);
            console.log("c$$", categories);
        }
        // if (!user) {
        //     navigate("/login")
        // }
        fetchData();
        // if (user) {
        // }


    }, []);



    return (
        <main style={{ backgroundColor: "#f5f5f5" }}>
            {/* Slide Show */}
            <Slideshow></Slideshow>
            <div className="grid wide">
                {/* Slideshow container */}

                <div className="promotion-container">
                    {/* Repeat this block for each promotion */}
                    <div className="promotion-item">
                        <img
                            src="./assets/img/promotion-icon.png"
                            alt="Khung Giờ Săn Sale"
                        />
                        <span>Khung Giờ Săn Sale</span>
                    </div>
                    <div className="promotion-item">
                        <img
                            src="./assets/img/promotion-icon2.png"
                            alt="Khung Giờ Săn Sale"
                        />
                        <span>Miễn Phí Vận Chuyển Toàn Quốc</span>
                    </div>
                    <div className="promotion-item">
                        <img
                            src="./assets/img/promotion-icon3.png"
                            alt="Khung Giờ Săn Sale"
                        />
                        <span>Voucher giảm giá đến 50%</span>
                    </div>
                    <div className="promotion-item">
                        <img
                            src="./assets/img/promotion-icon.png"
                            alt="Khung Giờ Săn Sale"
                        />
                        <span>Khung Giờ Săn Sale</span>
                    </div>
                    <div className="promotion-item">
                        <img
                            src="./assets/img/promotion-icon.png"
                            alt="Khung Giờ Săn Sale"
                        />
                        <span>Khung Giờ Săn Sale</span>
                    </div>
                    <div className="promotion-item">
                        <img
                            src="./assets/img/promotion-icon.png"
                            alt="Khung Giờ Săn Sale"
                        />
                        <span>Khung Giờ Săn Sale</span>
                    </div>
                    <div className="promotion-item">
                        <img
                            src="./assets/img/promotion-icon.png"
                            alt="Khung Giờ Săn Sale"
                        />
                        <span>Khung Giờ Săn Sale</span>
                    </div>
                    <div className="promotion-item">
                        <img
                            src="./assets/img/promotion-icon.png"
                            alt="Khung Giờ Săn Sale"
                        />
                        <span>Khung Giờ Săn Sale</span>
                    </div>
                    <div className="promotion-item">
                        <img
                            src="./assets/img/promotion-icon.png"
                            alt="Khung Giờ Săn Sale"
                        />
                        <span>Khung Giờ Săn Sale</span>
                    </div>
                    {/* ... Other promotion items ... */}
                </div>
                <div className="category-title_home">DANH MỤC</div>
                <div className="category-container">
                    {/* Repeat this block for each category */}

                    {Categories.map((category) => (
                        <div key={category._id} className="category-item">
                            <img className="category-item-img" src={category.image} />
                            <div className="category-item_title">
                                {category.category_name}
                            </div>
                        </div>
                    ))}
                    {/* ... Other category items ... */}
                </div>
                <div className="flash-sale">
                    <div className="flash-sale_title" />
                    {/* Timer */}
                    {/* <span class="timer">
     02:32:58
  </span> */}
                    <div className="flash-sale_container">
                        {/* Deals */}
                        <div className="deal">
                            <img
                                src="./assets/img/flash-sale-img2.jfif"
                                alt="Product Image"
                            />
                            <div className="discount">-41%</div>
                            <div className="logo-mall">Mall</div>
                            <div className="img-blackfriday">
                                <img src="./assets/img/flash-sale-img1.png" alt="ProductImg" />
                            </div>
                            <div className="price">₫217.150đ</div>
                            <div className="status-sale">
                                ĐANG BÁN CHẠY
                                <div />
                                <div />
                            </div>
                        </div>

                        {/* Repeat for each deal */}
                    </div>
                </div>
                <div className="sale-banner " style={{ marginTop: 50 }}>
                    <a href="#">
                        <img src="./assets/img/banner-sale.jfif" alt="" />
                    </a>
                </div>
                <div className="home_sugets_title">GỢI Ý HÔM NAY</div>
                {/* Suggets Product */}
                <div className="grid__row">
                    {/* product item */}

                    {Products.map((product) => (
                        <div key={product._id} className="grid__column-2-4">
                            <Link
                                className="home-product-item"
                                to={`/product/${product.product_id}`}
                            >
                                <div
                                    className="home-product-item__img"
                                    style={{
                                        backgroundImage: `url(${product.product_thumb})`,
                                    }}
                                />
                                <h4 className="home-product-item__name">
                                    {product.product_name}
                                </h4>
                                <div className="home-product-item__price">
                                    <span className="home-product-item__price-current">
                                        đ999.999
                                    </span>
                                    <span className="home-product-item__price-old">
                                        <NumericFormat
                                            value={new Intl.NumberFormat().format(product.product_price)}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"đ"}
                                        />
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
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="product-btnViewMore">
                    <button> Xem Thêm</button>
                </div>
            </div>
        </main>
    );
};

export default Home;
