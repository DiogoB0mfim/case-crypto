import { useState, useEffect } from 'react';
import axios from 'axios';

const FetchHistoricalData = (url) => {
    const [historicalData, setHistoricalData] = useState();

    useEffect(() => {
        const fetchHistoricalData = async () => {
            try {
                const response = await axios.get(url)
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

