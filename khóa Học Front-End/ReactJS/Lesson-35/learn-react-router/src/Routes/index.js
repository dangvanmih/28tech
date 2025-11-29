import LayoutDefault from "../layout/layoutDefault";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Error404 from "../pages/Error404";
import PrivateRoutes from "../components/PrivateRoutes";
import BlogAll from "../pages/Blog/BlogAll";
import BlogNews from "../pages/Blog/BlogNews";
import BlogDetail from "../pages/Blog/BlogDetail";
import InforUser from "../pages/InforUser";
import BlogRelated from "../pages/Blog/BLogRelated";

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
                path: "contact",
                element: <Contact />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "blog",
                element: <Blog />,
                children: [
                    {
                        index: true,
                        element: <BlogAll />
                    },
                    {
                        path: "new",
                        element: <BlogNews />
                    },
                    {
                        path: "related",
                        element: <BlogRelated />
                    },
                    {
                        path: ":id",
                        element: <BlogDetail />
                    }
                ]
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "*",
                element: <Error404 />
            },
            {
                element: <PrivateRoutes />,
                children: [
                    {
                        path: "infor-user",
                        element: <InforUser />
                    }
                ]
            }

        ]
    }
]
