import { useEffect, useState } from "react";
import { register } from "../../service/access.service";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
import './register.scss'
const Reigster = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Tên người dùng quá ngắn!')
            .max(50, 'Tên người dùng quá dài!')
            .required('Tên người dùng là bắt buộc!'),
        email: Yup.string()
            .email('Email không hợp lệ!')
            .required('Email là bắt buộc!'),
        password: Yup.string()
            .min(8, 'Mật khẩu phải có ít nhất 8 ký tự!')
            .required('Mật khẩu là bắt buộc!'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp!')
            .required('Xác nhận mật khẩu là bắt buộc!')
    });
    
    return (
        <div className="register-contain">
            <nav className="header-navbar__login grid wide">
                <div className="header-navbar">
                    <div className="header-navbar-left">
                        <div className="header-navbar__logo">
                            <a className="header-navbar__link">
                                <img src="./assets/img/Shopee-Logo-2015.png" />
                            </a>
                        </div>
                        <div className="header-navbar__title-left">Đăng Ký</div>
                    </div>
                    <div className="header-navbar-right">
                        <span className="header-navbar__title">Bạn Cần Giúp Đỡ ?</span>
                    </div>
                </div>
            </nav>
            <main className="main-login">
                <div className="main__form">
                    <div  className="main__form-header">Đăng Ký</div>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            password: '',
                            confirmPassword: ''
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={user => {
                            register(user, dispatch, navigate);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form >
                                <Field
                                   
                                    placeholder="Email/Số điện thoại"
                                    type="email"
                                    className="form__username"
                                    name="email"
                                />
                                <ErrorMessage style={{ color: 'red', fontSize: '12px' }} name="email" component="div" />
                                <Field
                                   
                                    placeholder="Tên người dùng"
                                    type="text"
                                    className="form__username"
                                    name="name"
                                />
                                <ErrorMessage style={{ color: 'red', fontSize: '12px' }} name="name" component="div" />
                                <Field
                                    
                                    placeholder="Mật Khẩu"
                                    type="password"
                                    name="password"
                                    className="form__password"
                                />
                                <ErrorMessage style={{ color: 'red', fontSize: '12px' }} name="password" component="div" />
                                <Field
                                   
                                    placeholder="Xác Nhận Lại Mật Khẩu"
                                    type="password"
                                    name="confirmPassword"
                                    className="form__password"
                                />
                                <ErrorMessage style={{ color: 'red', fontSize: '12px' }} name="confirmPassword" component="div" />
                                <button type="submit" className="form-login">
                                    Đăng Ký
                                </button>
                            </Form>
                        )}
                    </Formik>

                    {/* <div className="form__label">
                        <a>Quên Mật Khẩu</a>
                        <a>Đăng Nhập Với SMS</a>
                    </div>
                    <div className="form__bottom">
                        <button className="form__bottom-facebook">
                            <i className="fa-brands fa-facebook" style={{ color: "#0a5ceb" }} />
                            Facebook
                        </button>
                        <button className="form__bottom-google">
                            <i className="form__bottom-icong fa-brands fa-google" />
                            google
                        </button>
                    </div> */}
                </div>
            </main>
            <footer className="footer">
                <div className="grid wide">
                    <div className="grid__row">
                        <div className="grid__colum-2-5">
                            <h3 className="footer__heading">Chăm sóc khách hàng</h3>
                            <ul className="footer__heading-list">
                                <li className="footer__heading-item">
                                    <a className="footer__heading-item__link">Trung Tâm Trợ Giúp</a>
                                </li>
                                <li className="footer__heading-item">
                                    <a className="footer__heading-item__link">Shopee Blog</a>
                                </li>
                                <li className="footer__heading-item">
                                    <a className="footer__heading-item__link">Shopee Mall</a>
                                </li>
                            </ul>
                        </div>
                        <div className="grid__colum-2-5">
                            <h3 className="footer__heading">về shoppe</h3>
                            <ul className="footer__heading-list">
                                <li className="footer__heading-item">
                                    <a className="footer__heading-item__link">Trung Tâm Trợ Giúp</a>
                                </li>
                                <li className="footer__heading-item">
                                    <a className="footer__heading-item__link">Trung Tâm Trợ Giúp</a>
                                </li>
                                <li className="footer__heading-item">
                                    <a className="footer__heading-item__link">Trung Tâm Trợ Giúp</a>
                                </li>
                            </ul>
                        </div>
                        <div className="grid__colum-2-5">
                            <h3 className="footer__heading">Thanh toán</h3>
                            <ul className="footer__heading-list">
                                <li className="footer__heading-item">
                                    <a className="footer__heading-item__link">Trung Tâm Trợ Giúp</a>
                                </li>
                                <li className="footer__heading-item">
                                    <a className="footer__heading-item__link">Trung Tâm Trợ Giúp</a>
                                </li>
                                <li className="footer__heading-item">
                                    <a className="footer__heading-item__link">Trung Tâm Trợ Giúp</a>
                                </li>
                            </ul>
                        </div>
                        <div className="grid__colum-2-5">
                            <h3 className="footer__heading">Theo dõi chúng tôi trên</h3>
                            <ul className="footer__heading-list">
                                <li className="footer__heading-item">
                                    <i className="fa-brands fa-facebook" />
                                    <a className="footer__heading-item__link">Facebook</a>
                                </li>
                                <li className="footer__heading-item">
                                    <i className="fa-brands fa-instagram-square" />
                                    <a className="footer__heading-item__link">Instagram</a>
                                </li>
                                <li className="footer__heading-item">
                                    <i className="fa-brands fa-linkedin" />
                                    <a className="footer__heading-item__link">Linkedin</a>
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
                                        alt="true"
                                        className="footer__dowload-app-img"
                                    />
                                    <img
                                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png"
                                        className="footer__dowload-app-img"
                                    />
                                    <img
                                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1ae215920a31f2fc75b00d4ee9ae8551.png"
                                        className="footer__dowload-app-img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="grid wide"></div>
                </div>
            </footer>
        </div>
    );
};

export default Reigster;
