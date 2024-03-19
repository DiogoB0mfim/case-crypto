import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from "../constants/ApiKey";

const FetchHistoricalData = (url) => {
    const [historicalData, setHistoricalData] = useState();

    useEffect(() => {
        const fetchHistoricalData = async () => {
            try {
                const header = { header: { auth: API_KEY } }
                const response = await axios.get(url, header)

                setHistoricalData(response.data.prices);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchHistoricalData();

    }, []);

    return { historicalData };
};

export default FetchHistoricalData;

