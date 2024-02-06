import React from 'react'
import axios from "axios";
import { useState } from "react";

const useProductCalls = () => {

  const [data, setData] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products`);
      setData(data);
      // console.log(data);
    } catch (error) {
      // console.log(error);
    }
  };

    
  return {data, getProducts}
}

export default useProductCalls