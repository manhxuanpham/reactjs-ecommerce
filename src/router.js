import { createBrowserRouter } from "react-router-dom";
import Home from "./components/home";
import Product from "./components/product/product";
import Search from "./components/search/search";
import Checkout from "./components/checkout/checkout";
import Order from "./components/order/order";
import ErrorBoundary from "./components/404";
import App from "./App";
import Cart from "./components/cart/cart";
import Login from "./components/login";
import ScrollToTop from "./components/scrollToTop";
import Reigster from "./components/register/register";
import AdminLayout from "./admin/layout";
import OrderAdmin from "./admin/components/order/order";
import CategoryAdmin from "./admin/components/category/category";
import ProductAdmin from "./admin/components/product/product";
const router = createBrowserRouter([
    {
        path: "",
        element: <>
            <ScrollToTop></ScrollToTop>
            <App></App>
        </>,
        errorElement: <ErrorBoundary></ErrorBoundary>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/product/:productId",
                element: <Product />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/search/:wordSearch",
                element: <Search />
            },
            {
                path: "/checkout",
                element: <Checkout />
            },
            {
                path: "/order",
                element: <Order />
            },
        ],

    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Reigster></Reigster>
    },
    {
        path:"/admin",
        element:<AdminLayout></AdminLayout>,
        errorElement: <ErrorBoundary></ErrorBoundary>,
        children: [
            {
                path: "order",
                element: <OrderAdmin />
            },
            {
                path: "product",
                element: <ProductAdmin />
            },
            {
                path: "category",
                element: <CategoryAdmin />
            }
        ]
    }
]);

export default router