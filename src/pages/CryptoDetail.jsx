import { useParams } from 'react-router-dom';
import FetchApiData from '../hooks/FetchApiData';
import FetchHistoricalData from '../hooks/FetchHistoricalData';
import { useEffect } from 'react';
import { BASE_URL } from '../constants/Url';
import Chart from "react-apexcharts";
import { API_KEY } from '../constants/ApiKey';
import * as S from "../styles/CryptoDetailStyled"

const CryptoDetail = () => {
    const { id } = useParams();
    const { data } = FetchApiData(`${BASE_URL}/coins/markets?vs_currency=brl&price_change_percentage=7d${API_KEY}`);
    const historic = FetchHistoricalData(`${BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=7${API_KEY}`);
    let pricePercent7d = 0

    useEffect(() => { historic }, [])

    const filterData = data && data.map((crypto, index) => {
        if (crypto.id === id) {
            pricePercent7d = crypto.price_change_percentage_7d_in_currency
            return (
                <div key={index}>
                    <p>Variação de preço nas últimas 24h: {crypto.price_change_24h}</p>
                    <p>Alta: {crypto.high_24h}</p>
                    <p>Baixa: {crypto.low_24h}</p>
                    <p>Volume de mercado: {crypto.total_volume}</p>
                </div>
            );
        }
    })

    const chartColor = () => {
        if (pricePercent7d <= 0) {
            return "#ff3131"
        } else {
            return "#25df3e"
        }
    }

    const options = {
        chart: {
            type: "area",
            sparkline: { enabled: true },
            animations: { enabled: false },
        },
        tooltip: { enabled: false },
        stroke: { width: 2 },
        colors: [chartColor()],
    };

    const series = [
        {
            data: historic.historicalData && historic.historicalData
        }
    ];

    return (
        <>
            <Chart
                options={options}
                series={series}
                type="line"
                width="500"
            />
            {filterData}
        </>
    );
};

export default CryptoDetail;