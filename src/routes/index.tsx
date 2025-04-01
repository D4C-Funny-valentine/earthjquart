import { useRoutes } from "react-router-dom";
import RootLayout from "../layout/root";
import HomePage from "../pages/home";
import HomeList from "../pages/home/list";
import Page404 from "../pages/404";

const AppRoutes = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: (
                    <RootLayout />
            ),
            children: [
                {
                    path: "/",
                    element: <HomePage />,
                    children: [
                        {
                            path: "",
                            element: <HomeList />,
                        },
                    ]
                },
                {
                    path: "*",
                    element: <Page404 />,
                },
            ],
        },
    ]);

    return routes;
};


export default AppRoutes;