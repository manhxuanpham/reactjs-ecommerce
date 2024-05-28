import React, { Component } from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="grid wide">
                <div className="grid__row">
                    <div className="grid__colum-2-5">
                        <h3 className="footer__heading">Chăm sóc khách hàng</h3>
                        <ul className="footer__heading-list">
                            <li className="footer__heading-item">
                                <a href="#" className="footer__heading-item__link">
                                    Trung Tâm Trợ Giúp
                                </a>
                            </li>
                            <li className="footer__heading-item">
                                <a href="#" className="footer__heading-item__link">
                                    Shopee Blog
                                </a>
                            </li>
                            <li className="footer__heading-item">
                                <a href="#" className="footer__heading-item__link">
                                    Shopee Mall
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid__colum-2-5">
                        <h3 className="footer__heading">về shoppe</h3>
                        <ul className="footer__heading-list">
                            <li className="footer__heading-item">
                                <a href="#" className="footer__heading-item__link">
                                    Trung Tâm Trợ Giúp
                                </a>
                            </li>
                            <li className="footer__heading-item">
                                <a href="#" className="footer__heading-item__link">
                                    Trung Tâm Trợ Giúp
                                </a>
                            </li>
                            <li className="footer__heading-item">
                                <a href="#" className="footer__heading-item__link">
                                    Trung Tâm Trợ Giúp
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid__colum-2-5">
                        <h3 className="footer__heading">Thanh toán</h3>
                        <ul className="footer__heading-list">
                            <li className="footer__heading-item">
                                <a href="#" className="footer__heading-item__link">
                                    Trung Tâm Trợ Giúp
                                </a>
                            </li>
                            <li className="footer__heading-item">
                                <a href="#" className="footer__heading-item__link">
                                    Trung Tâm Trợ Giúp
                                </a>
                            </li>
                            <li className="footer__heading-item">
                                <a href="#" className="footer__heading-item__link">
                                    Trung Tâm Trợ Giúp
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid__colum-2-5">
                        <h3 className="footer__heading">Theo dõi chúng tôi trên</h3>
                        <ul className="footer__heading-list">
                            <li className="footer__heading-item">
                                <i className="fa-brands fa-facebook" />
                                <a href="#" className="footer__heading-item__link">
                                    Facebook
                                </a>
                            </li>
                            <li className="footer__heading-item">
                                <i className="fa-brands fa-instagram-square" />
                                <a href="#" className="footer__heading-item__link">
                                    Instagram
                                </a>
                            </li>
                            <li className="footer__heading-item">
                                <i className="fa-brands fa-linkedin" />
                                <a href="#" className="footer__heading-item__link">
                                    Linkedin
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid__colum-2-5">
                        <h3 className="footer__heading">Vào cửa hàng trên ứng dụng</h3>
                        <div className="footer__dowload">
                            <img
                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/d91264e165ed6facc6178994d5afae79.png"
                                className="footer__dowload-qr"
                                alt="footer__dowload-qr"
                            />
                            <div className="footer__dowload-apps">
                                <img
                                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png"
                                    alt="img"
                                    className="footer__dowload-app-img"
                                />
                                <img
                                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png"
                                    alt="img"
                                    className="footer__dowload-app-img"
                                />
                                <img
                                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1ae215920a31f2fc75b00d4ee9ae8551.png"
                                    alt="img"
                                    className="footer__dowload-app-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p />
            <div className="footer__bottom">
                <div className="grid wide">
                    {/* <p class="footer__text">11:54 11/3/2022 @ Bản quyền thuộc về wh6</p> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
