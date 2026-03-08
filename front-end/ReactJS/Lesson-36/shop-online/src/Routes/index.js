import LayoutDefault from "../layout/layoutDefault";
import Home from "../page/Home"
import Cart from "../page/cart"
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
                path: "cart",
                element: <Cart />
            },
        ]
    }
]
