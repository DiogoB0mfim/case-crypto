import { useEffect, useState } from "react";
import { getEthBalance } from "../services/MetaMaskService";
import logo from "../assets/logo-cp.png";
import eyeClosed from "../assets/eye-closed.png";
import eyeOpen from "../assets/eye-open.png";
import stripBalance from "../assets/strip-balance.png";
import * as S from "../styles/HeaderStyled";
import formatToUsd from "../hooks/FormatToUsd";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [showBalance, setShowBalance] = useState(false)
    useEffect(() => { checkBalance(); }, [])

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

    return (
        <>
            <S.Container>
                <S.ImgLogo onClick={() => navigate("/")} src={logo} alt="logo cryptoplus" />
                <S.DivBalance>
                    {showBalance === true ? formatToUsd(parseInt(balance)) : <img src={stripBalance} alt="tarja de saldo" />}
                    <S.ImgEye onClick={() => setShowBalance(!showBalance)} src={showBalance === false ? eyeOpen : eyeClosed} alt="ícone olho fechado" />
                </S.DivBalance>
            </S.Container>
        </>
    );
}

export default Header;