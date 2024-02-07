import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
} from "../features/authSlice";
import useAxios from "./useAxios";

const useAuthCalls = () => {
  const dispatch = useDispatch();
 
  const { axiosSimple } = useAxios();
  const { axiosToken } = useAxios();

  const login = async (values:any) => {
   
    dispatch(fetchStart());
    try {
      const { data } = await axiosSimple.post(`users/auth/login`, values);
      dispatch(loginSuccess(data));
       
     
      // console.log(data);
    } catch (error:any) {
      // console.log(error);
      dispatch(fetchFail());
      
    }
  };

  const register = async (values:any) => {
    
    dispatch(fetchStart());
    try {
      const { data } = await axiosSimple.post(`users/auth/register`, values);
      dispatch(registerSuccess(data));
       
    
      // console.log(data);
    } catch (error:any) {
      // console.log(error);
      dispatch(fetchFail());
        
    }
  };
  const logout = async () => {

    dispatch(fetchStart());
    try {
      const { data } = await axiosToken.get(`users/auth/logout`);
      dispatch(logoutSuccess());
    
    } catch (error) {
      // console.log(error.message);
      dispatch(fetchFail());
    }
  };

  return { login, register, logout };
};

export default useAuthCalls;