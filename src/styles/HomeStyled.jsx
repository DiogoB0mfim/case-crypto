import styled from "styled-components";

export const Container = styled.div`
   height: 88vh;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
`

export const CardContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(5, 1fr); /* 3 columns */
    justify-content: space-between;
    gap: 2rem;
    padding: 1rem;
   
   @media(max-width: 1280px){
    grid-template-columns: repeat(4, 1fr);
   }

   @media(max-width: 1144px){
    grid-template-columns: repeat(3, 1fr);
   }

    @media(max-width: 768px){
     grid-template-columns: repeat(1, 1fr);
    } 
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ececec;
    padding: 1rem;
    border-radius: 5px;
    height: 350px;
    gap: 1rem; 
`

export const DivSymbolVar = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`

export const ImgSymbol = styled.img`
    margin-top: 20px;
    width: 130px;
    height: 130px;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
        filter: grayscale(100%);
    }
`

export const DivInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    height: 100%;
`

export const Pinfos = styled.p`
    margin-top: -17px;
    margin-bottom: 15px;
    color: #0C0D22;
`

export const BtnDetails = styled.button`
    border: none;
    background-color: #0C0D22;
    padding: 1rem;
    width: 80%;
    border-radius: 5px;
    color: #ffff;
    font-size: 20px;
    cursor: pointer;
    transition: 1s;

    &:hover{
        background-color: #1d1f58;
    }
`