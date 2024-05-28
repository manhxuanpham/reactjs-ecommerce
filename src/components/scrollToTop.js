import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]); // Chạy useEffect này mỗi khi pathname thay đổi

    return null; // Component này không render gì cả
};

export default ScrollToTop;
