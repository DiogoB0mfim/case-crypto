import { useNavigate } from 'react-router-dom';
import FetchApiData from '../hooks/FetchApiData';
import { BASE_URL } from '../constants/Url'
import { getEthBalance } from '../services/MetaMaskService';
import { useEffect, useState } from 'react';
import { API_KEY } from '../constants/ApiKey';

const Home = () => {
    const navigate = useNavigate();
    const { data } = FetchApiData(`${BASE_URL}/coins/markets?vs_currency=brl${API_KEY}`);
    
    useEffect(() => {checkBalance();}, [])

    //Adress fictício para testar wallet 0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B
    const [address, setAddress] = useState("0xA39D912dc42600508e299e388F01300Cf89A0e6f");
    const [balance, setBalance] = useState('');
    const [message, setMessage] = useState('');

    async function checkBalance() {
        try {
            let balance = await getEthBalance(address);
            setBalance(balance);
        }
        catch (err) {
            setMessage(err.message)
        }
    }

    const mapData = data && data.slice(0, 10).map((crypto, index) => {
        return (
            <div key={index} onClick={() => navigate(`/crypto-detal/${crypto.id}`)}>
                <p>{crypto.name}</p>
                <p>{crypto.symbol}</p>
                <p>{crypto.current_price}</p>
                <img src={crypto.image} alt="icone da crypto" />
            </div>)
    })

    return (
        <div>
            <p>{balance}</p>
            <h1>{mapData}</h1>
        </div>
    );
}

export default Home;

