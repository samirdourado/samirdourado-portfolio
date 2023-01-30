import styled from "styled-components"

export const ProfileFigure = styled.figure`
    display: flex;    
    border-radius: 50%;
    overflow: auto;
    border: solid 2px var(--colorA);

    @media (min-width:501px) {
        width: 400px;
        height: 400px;
        min-width: 400px;
        min-height: 400px;
        /* margin-left: 2vw */
    }

    @media (max-width:500px) {
        width: 170px;
        height: 170px;
        min-width: 170px;
        min-height: 170px;
    }    
`

export const StackImage = styled.img`
    height: 80%;
`