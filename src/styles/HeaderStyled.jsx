import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom : 1px solid #E2E2E2;
    padding: 1rem;

    @media(max-width: 750px) {
        flex-direction: column;
        justify-content: center;
        gap: 0.5rem;
    }
`

export const DivBalance = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media(max-width: 750px) {
        margin-right:0rem;
    }
`

export const ImgEye = styled.img`
    cursor: pointer;
`

export const ImgLogo = styled.img`
    cursor: pointer;
`
