import React from 'react'
import axios from "axios";
import { useState } from "react";
import useAxios from './useAxios';
import { useDispatch, useSelector } from 'react-redux';

const useProductCalls = () => {

  const [data, setData] = useState([]);
  
  const { axiosToken } = useAxios()
  const {user} = useSelector((state:any)=>state.auth)


  const getProducts = async () => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products`);
      setData(data);
      // console.log(data);
    } catch (error) {
      // console.log(error);
    }
  };
  const getPurchases = async () => {
    try {
      
      const { data } = await axiosToken.get(`/users/${user?._id}`, 
      );
      // console.log(data);
      setData(data.data.purchases)
 
    } catch (error) {
  
      // console.log(error.message);
    }
  };
    
  return {data, getProducts, getPurchases}
}

export default useProductCalls