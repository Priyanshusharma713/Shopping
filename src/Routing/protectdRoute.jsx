import { Navigate } from "react-router-dom"

const ProtectedRoute = () =>{

const isUser = window.localStorage.getItem('userType')

isUser === "user"? <Navigate to="/home" /> : <Navigate to="/login"/>

}
export default ProtectedRoute;