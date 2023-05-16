import styled from "styled-components"

export const BtnNav = styled.button`
    cursor: pointer;
    display: flex;    
    align-items: end ;
    gap: 5px;
    padding: 5px;    
    border: none;
    background-color: transparent;
    color: var(--white);    
    position: relative;
    

    &:hover::after{
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: var(--colorB);
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
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
    padding: 10px 20px;
    text-decoration: none;

    @media (max-width: 1100px) {
        margin-bottom: 20px;
    }
`