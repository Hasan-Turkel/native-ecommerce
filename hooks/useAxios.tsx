
import { useSelector } from "react-redux";
import axios from "axios"

const useAxios = () => {

  const {token} = useSelector((state:any)=>state.auth)
  const baseurl = "https://e-commerce-backend-ecru.vercel.app/"
  
  

  const axiosSimple = axios.create({
    baseURL:`${baseurl}`
  })
  const axiosToken = axios.create({
    baseURL: `${baseurl}`,
    headers: { Authorization: `Token ${token}` },
  })

  return { axiosSimple, axiosToken}
}

export default useAxios