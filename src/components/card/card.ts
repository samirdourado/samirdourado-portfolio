import styled from "styled-components";

export const CardHolder = styled.li`
    list-style: none;
    width: 205px;
    min-width: 205px;
    max-width: 205px;
    height: 333px;
    min-height: 333px;
    max-height: 300px;
    background-color: white; 
    border: 2px solid var(--white);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 20px;
    transition: transform 0.5s;

    &&:hover {
        border: 2px solid var(--colorA);
        transform: scale(1.05) ;
    }
`

export const ImageCardHolder = styled.figure`
    width: 100%;
    height: 100px;
    max-width: 200px;
    max-height: 100px;    
    background-color: var(--colorB);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--colorB);
    border-radius: 4px;
    margin-bottom: 10px;
    
`
export const ImageCard = styled.img`
    width: 100%;
    border: 1px solid var(--colorB);
    border-radius: 4px;
    margin: 0 auto;
`

export const CardContentHolder = styled.section`    
    width: 100%;
    height: 100%;    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const TitleCard = styled.h3`
    color: var(--black);
    font-weight: 500;
    font-size: var(--title4);
`

export const DescriptionCard = styled.p`
    width: 100%;
    height: 80px;
    overflow-y: auto;
`

export const TechsImageCard = styled.figure`    
    width: 100%;
    max-width: 184px;
    display: flex;    
    gap: 10px;
`

export const ImageTechCard = styled.img`
    width: 20px;
    height: 20px;
`

export const GroupBtn = styled.div`
    width: 100%;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const ViewProjectBtn = styled.button`
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
