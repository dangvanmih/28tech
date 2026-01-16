import LayoutDefault from "../layout/layoutDefault";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Brand from "../pages/Brand";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Register from "../pages/Register";
export const routes = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "brand",
                element: <Brand />
            },
            {
                path: "product",
                element: <Product />
            },
            {
                path: "*",
                element: <Error404 />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    }
]