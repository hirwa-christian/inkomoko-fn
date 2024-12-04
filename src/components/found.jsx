import { Outlet, Navigate } from "react-router-dom"

const ProtectedRoute = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default  ProtectedRoute