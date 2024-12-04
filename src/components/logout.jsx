import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Logout=()=>{
    const navigate=useNavigate();
    useEffect(()=>{
        localStorage.removeItem('tokrn');
        localStorage.removeItem('user')
     localStorage.removeItem('isLoggedIn');

        navigate('/login')
    })

}
export default Logout