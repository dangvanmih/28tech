import LayoutDefault from "../layout/layoutdefault";
import BookRoom from "../pages/BookRoom";
import DashBoard from "../pages/Dashboard";

export const routes = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <DashBoard/>
            },
            {
                path: "/book-room",
                element: <BookRoom/>
            }
        ]
    }
]
