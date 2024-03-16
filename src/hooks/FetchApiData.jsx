import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from "../constants/ApiKey";

const FetchApiData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const header = { header: { auth: API_KEY } }
        const response = await axios.get(url, header);
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();

  }, [url]);

  return { data };
};

export default FetchApiData;

