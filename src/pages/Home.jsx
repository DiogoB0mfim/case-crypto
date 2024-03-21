import { useNavigate } from 'react-router-dom';
import FetchApiData from '../hooks/FetchApiData';
import { BASE_URL } from '../constants/Url'
import { API_KEY } from '../constants/ApiKey';
import Header from '../components/Header';
import * as S from '../styles/HomeStyled';


const Home = () => {
    const navigate = useNavigate();
    const { data } = FetchApiData(`${BASE_URL}/coins/markets?vs_currency=usd${API_KEY}`);
    
    const mapData = data && data.slice(0, 10).map((crypto, index) => {
        return (
            <S.Card key={index}>
                <S.DivSymbolVar>
                    <S.ImgSymbol src={crypto.image} alt="icone da crypto" />
                </S.DivSymbolVar>
                <S.DivInfos>
                    <S.Pinfos>{crypto.name} <b>({crypto.symbol.toUpperCase()})</b></S.Pinfos>
                    <S.Pinfos>{crypto.current_price.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' })}</S.Pinfos>
                </S.DivInfos>
                    <S.BtnDetails onClick={() => navigate(`/crypto-detal/${crypto.id}`)}>Detalhes</S.BtnDetails>
                
            </S.Card>)
    })

    return (
        <div>
            <Header/>
            <S.Container>
                <S.SP>
                    {mapData}
                </S.SP>
            </S.Container>
        </div>
    );
}

export default Home;

