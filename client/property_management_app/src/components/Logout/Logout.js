import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import { AuthContext, useAuthContext } from "../../contexts/AutoContext";

//import * as authService from '../../services/authService';

export const Logout = () => {
    //const { onLogout } = useContext(AuthContext);
    const { onLogout } = useAuthContext();

    useEffect(() => {
        onLogout();
    }, [onLogout]);

    return <Navigate to="/" /> 
};

// export const Logout = () => {
//     const navigate = useNavigate();
//     const { user, userLogout } = useContext(AuthContext);

//     useEffect(() => {
//         authService.logout(user.accessToken)
//         .then(() => {
//             userLogout();
//             navigate('/');
//         })
//         .catch(() => {
//             navigate('/');
//         });
//     })

// }