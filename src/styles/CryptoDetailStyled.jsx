import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 84vh;
    gap: 1rem;
    padding: 1rem;

    @media(max-width: 1320px){
        flex-direction: column;
        height: 100%;
    }
`

export const ContainerInfos = styled.div`
    display: flex;
    padding-right: 2rem;
    border-right: 1px solid #DEDEDE;

    @media(max-width: 1320px){
        border: none;
        padding-right: 0rem;
    }

    @media(max-width: 764px) {
        font-size: 20px;
        padding-right: 0rem;
    } 
`

export const DivSymbolName = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7rem;
`

export const ImgSymbol = styled.img`
    width: 35px;
    height: 35px;
`

export const MarketP = styled.p`
    background-color: #e6e5e5;
    color: #5f5f5f;
    padding: 4px;
    border-radius: 5px;
    font-size: 16px;
`

export const CryptoCurrencyB = styled.b`
    font-size: 36px;

    @media(max-width: 764px) {
        font-size: 25px;
    }
`

export const DivInfos = styled.div`
    display: flex;
    flex-direction: column;
`

export const DivSpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;
    border-bottom: 1px solid #DEDEDE;

    @media(max-width: 764px) {
        gap: 1rem;
    }
`

export const SpanInfos = styled.span`
    color: #A8A8A8;

    @media(max-width: 764px) {
        font-size: 20px;
    }
    
    @media(max-width: 440px) {
        font-size: 16px;
    }
`

export const PInfos = styled.p`
    @media(max-width: 764px) {
        font-size: 20px;
    }

    @media(max-width: 440px) {
        font-size: 16px;
    }
`

