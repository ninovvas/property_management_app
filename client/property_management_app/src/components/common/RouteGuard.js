import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AutoContext";

//import { useAuthContext } from "../../contexts/AuthContext";

export const RouteGuard = ({
    children,
}) => {
    //const { isAuthenticated } = useAuthContext();
    const { isAuthenticated } = useContext(AuthContext);
    
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children ? children : <Outlet />
};