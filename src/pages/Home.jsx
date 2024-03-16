import { useNavigate } from 'react-router-dom';
import FetchApiData from '../hooks/FetchApiData';
import {BASE_URL} from '../constants/Url'

const Home = () => {
    const navigate = useNavigate();
    const { data } = FetchApiData(`${BASE_URL}/coins/markets?vs_currency=brl`);

    const mapData = data && data.slice(0, 10).map((crypto, index) => {
        return (
            <div key={index} onClick={() => navigate(`/crypto-detal/${crypto.id}`)}>
                <h1>{crypto.name}</h1>
                <p>{crypto.current_price}</p>
                <img src={crypto.image} alt="icone da crypto" />
            </div>)
    })

    return (
        <div>
            <h1>{mapData}</h1>
        </div>
    );
}

export default Home;