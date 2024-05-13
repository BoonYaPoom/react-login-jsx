import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "./Provider/AuthProvider";
import Home from "./Home";
import Login from "./handle/Login";
import Logout from "./handle/Logout";
import LoginApi from "./handle/LoginApi";

const Routes = () => {
    const { token } = useAuth();

    // Define public routes accessible to all users
    const routesForPublic = [
        {
            path: "/service",
            element: <div>Service Page</div>,
        },
        {
            path: "/about-us",
            element: <div>About Us</div>,
        },
    ];

    // Define routes accessible only to authenticated users
    const routesForAuthenticatedOnly = [
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    path: "",
                    element: <div>User ok Home Page</div>,
                },
                {
                    path: "profile",
                    element: <div>User Profile</div>,
                },
              
                {
                    path: "logout",
                    element: <Logout />,
                },
            ],
        },
    ];

    // Define routes accessible only to non-authenticated users
    const routesForNotAuthenticatedOnly = [
        {
            path: "/",
            element: <div>Home Page</div>,
        },
        {
            path: "/loginapi",
            element: <LoginApi />,
        },
        {
            path: "/nouser",
            element: <div>No Users Register</div>,
        },
        {
            path: "/login",
            element: <Login />,
        },
    ];

    // Combine and conditionally include routes based on authentication status
    const router = createBrowserRouter([
        ...routesForPublic,
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
    ]);

    // Provide the router configuration using RouterProvider
    return <RouterProvider router={router} />;
};

export default Routes;