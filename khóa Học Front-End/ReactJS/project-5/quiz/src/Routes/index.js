import LayoutDefault from "../layout/layoutDefault";
import PrivateRoutes from "../components/PrivateRoutes";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Answers from "../pages/Answers";
import Result from "../pages/Result";
import Topic from "../pages/Topic";
import Error404 from "../pages/Error404";
import Quiz from "../pages/Quiz";
import Logout from "../pages/Logout";
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
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "logout",
                element: <Logout />
            },
            {
                path:"*",
                element: <Error404/>
            },
            {
                element: <PrivateRoutes />,
                children: [
                    {
                        path: "answers",
                        element: <Answers />
                    },
                    {
                        path: "quiz/:id",
                        element: <Quiz />
                    },
                    {
                        path: "topic",
                        element: <Topic />
                    },
                    {
                        path: "result",
                        element: <Result />
                    }
                ]
            }

        ]
    }
]
