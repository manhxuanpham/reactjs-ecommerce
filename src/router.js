import { createBrowserRouter } from "react-router-dom";
import Home from "./components/home";
import Product from "./components/product";
import Search from "./components/search";
import Checkout from "./components/checkout";
import Order from "./components/order";
import ErrorBoundary from "./components/404";
import App from "./App";
import Cart from "./components/cart";
import Login from "./components/login";
import ScrollToTop from "./components/scrollToTop";
import Reigster from "./components/register/register";
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
                path: "/search",
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
    }
]);

export default router