import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80vh;
`

export const HeaderError = styled.div`
    padding: 1rem;
    display: flex;
    border-bottom : 1px solid #E2E2E2;
`

export const ImgError = styled.img`
    width: 450px;
    height: 400px;
    @media(max-width: 1150px) {
        display: none;
    }
`
export const H1Error = styled.h1`
    text-align: center;
    width: 700px;
    margin-right: 5rem;

    @media(max-width: 1150px) {
        margin-right: 0rem;
        width: 80%;
    }

    @media(max-width: 482px) {
        margin-right: 0rem;
        width: 80%;
        font-size: 32px;
    }
`

export const ImgLogo = styled.img`
    cursor: pointer;
`

export const PError = styled.p`
    position: absolute;
    bottom: 0;
    left: 1rem;
    font-weight: bold;
`