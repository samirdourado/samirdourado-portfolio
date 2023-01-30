import styled from "styled-components"

export const BtnNav = styled.button`
    cursor: pointer;
`

export const PortfolioButton = styled.button`
    width: 100%;
    height: 40px;
    background-color: var(--colorA);
    border: 1px solid var(--colorA);
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 600;
    color: var(--white);
    cursor: pointer;

    @media (min-width: 750px) {
        max-width: 277px;
    }
`