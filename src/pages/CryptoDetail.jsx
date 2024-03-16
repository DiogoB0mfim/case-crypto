import { useParams } from 'react-router-dom';
import FetchApiData from '../hooks/FetchApiData';
import FetchHistoricalData from '../hooks/FetchHistoricalData';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/Url';
import * as S from "../styles/CryptoDetailStyled"
import { Chart } from "react-google-charts";

const CryptoDetail = () => {
    const { id } = useParams();
    const { data } = FetchApiData('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl');
    const historicalData = FetchHistoricalData(`${BASE_URL}/coins/bitcoin/market_chart?vs_currency=usd&days=3`);

    useEffect(() => { historicalData }, [historicalData])






    const filterData = data && data.map((crypto, index) => {
        if (crypto.id === id) {
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



    return (
        <div>
            {filterData}

        </div>
    );
};

export default CryptoDetail;