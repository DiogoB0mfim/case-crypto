import iconLontraError from "../assets/icon-lontra-error.png"
import * as S from "../styles/ErrorStyled"
import logo from "../assets/logo-cp.png";
import { useNavigate } from "react-router-dom";

const Error = () => {
	const navigate = useNavigate();
	return (
		<>
			<S.HeaderError>
				<S.ImgLogo onClick={() => navigate("/")} src={logo} alt="logo" />
			</S.HeaderError>
			<S.Container>
				<S.H1Error>OPS! NÃO ENCONTRAMOS ESSA PÁGINA {":("}</S.H1Error>
				<S.ImgError src={iconLontraError} alt="imagem de lontra da página de error" />
			</S.Container>
			<S.PError>ERROR 404.</S.PError>
		</>
	)
}

export default Error;