import { useNavigate } from 'react-router-dom';
import FetchApiData from '../hooks/FetchApiData';
import { BASE_URL } from '../constants/Url'
import { API_KEY } from '../constants/ApiKey';
import Header from '../components/Header';

const Home = () => {
    const navigate = useNavigate();
    const { data } = FetchApiData(`${BASE_URL}/coins/markets?vs_currency=usd${API_KEY}`);
    
    const mapData = data && data.slice(0, 10).map((crypto, index) => {
        return (
            <div key={index} onClick={() => navigate(`/crypto-detal/${crypto.id}`)}>
                <p>{crypto.name}</p>
                <p>{crypto.symbol}</p>
                <p>{crypto.current_price}</p>
                <p>{crypto.price_change_percentage_24h}</p>
                <img src={crypto.image} alt="icone da crypto" />
            </div>)
    })

    return (
        <div>
            <Header/>
            <h1>{mapData}</h1>
        </div>
    );
}

export default Home;

