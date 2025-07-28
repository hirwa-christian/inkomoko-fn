import axios from "axios";
export const SignupUser =async (userData)=>{
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/api/Trader/addUser`,
    userData    
  );
  return response.data
}