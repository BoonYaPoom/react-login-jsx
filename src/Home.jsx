import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./Provider/AuthProvider";

function Home() {
    const { token } = useAuth();

    // Check if the user is authenticated
    if (!token) {
        // If not authenticated, redirect to the login page
        return <Navigate to="/nouser" />;
    }
    // If authenticated, render the child routes
    return <Outlet />;
}

export default Home
