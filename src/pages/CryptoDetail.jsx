import { useParams } from 'react-router-dom';
import FetchApiData from '../hooks/FetchApiData';
import FetchHistoricalData from '../hooks/FetchHistoricalData';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/Url';
import Chart from "react-apexcharts";
import { API_KEY } from '../constants/ApiKey';
import * as S from "../styles/CryptoDetailStyled"
import Header from '../components/Header';
import formatToUsd from '../hooks/FormatToUsd';

const CryptoDetail = () => {
    const { id } = useParams();
    const { data } = FetchApiData(`${BASE_URL}/coins/markets?vs_currency=usd&price_change_percentage=7d${API_KEY}`);
    const historic = FetchHistoricalData(`${BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=7${API_KEY}`);
    const [tamanhoTela, setTamanhoTela] = useState(window.innerWidth);
    let pricePercent7d = 0

    const handleResize = () => {
        setTamanhoTela(window.innerWidth);
    }

    useEffect(() => {handleResize()}, [])
    useEffect(() => { historic }, [])

    window.addEventListener('resize', handleResize);

    const filterData = data && data.map((crypto, index) => {
        if (crypto.id === id) {
            pricePercent7d = crypto.price_change_percentage_7d_in_currency
            return (
                <div key={index}>
                    <S.DivSymbolName>
                        <S.ImgSymbol src={crypto.image} alt="icone da crypto" />
                        <b>{crypto.name}</b>
                        <S.MarketP>#{crypto.market_cap_rank}</S.MarketP>
                    </S.DivSymbolName>
                    <S.CryptoCurrencyB>{formatToUsd(crypto.current_price)}</S.CryptoCurrencyB>
                    <S.DivInfos>
                        <S.DivSpaceBetween>
                            <S.SpanInfos>Variação de preço nas últimas 24h</S.SpanInfos>
                            <S.PInfos>{formatToUsd(crypto.price_change_24h)}</S.PInfos>
                        </S.DivSpaceBetween>
                        <S.DivSpaceBetween>
                            <S.SpanInfos>Alta 24h</S.SpanInfos>
                            <S.PInfos>{formatToUsd(crypto.high_24h)}</S.PInfos>
                        </S.DivSpaceBetween>
                        <S.DivSpaceBetween>
                            <S.SpanInfos>Baixa 24h</S.SpanInfos>
                            <S.PInfos>{formatToUsd(crypto.low_24h)}</S.PInfos>
                        </S.DivSpaceBetween>
                        <S.DivSpaceBetween>
                            <S.SpanInfos>Volume de mercado</S.SpanInfos>
                            <S.PInfos>{formatToUsd(crypto.total_volume)}</S.PInfos>
                        </S.DivSpaceBetween>
                        <S.DivSpaceBetween>
                            <S.SpanInfos>Capitalização de mercado</S.SpanInfos>
                            <S.PInfos> {formatToUsd(crypto.market_cap)}</S.PInfos>
                        </S.DivSpaceBetween>
                    </S.DivInfos>
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
            type: 'line',
            sparkline: { enabled: true },
        },
        tooltip: { enabled: false },
        stroke: { width: 2 },
        colors: [chartColor()],
        grid: {
            show: true, // Define se a grade é exibida ou não
            borderColor: '#e2e2e2', // Cor da borda da grade
        }
    }

    const series = [
        {
            data: historic.historicalData && historic.historicalData
        }
    ];

    return (
        <>
            <Header />
            <S.Container>
                <S.ContainerInfos>
                    {filterData}
                </S.ContainerInfos>
                <Chart
                    options={options}
                    series={series}
                    type="line"
                    width={tamanhoTela < 550 ? "300" : "500"}
                    height={tamanhoTela < 550 ? "250" : "350"}
                />
            </S.Container>
        </>
    );
};

export default CryptoDetail;