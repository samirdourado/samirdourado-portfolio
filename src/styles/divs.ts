import styled  from "styled-components";

export const Container = styled.div`
    background-color: var(--black);
    width: 100%;
    height: 100px;
    min-width: 320px;
    display: flex;
    flex-direction: column;
`

export const Header = styled.header`
    width: 100%;
    margin: 0 auto;    
    display: flex;
    justify-content: center;
    background-color: var(--black);
    border-bottom: solid 1px var(--grey1);
    margin-bottom: 40px;
    position: fixed;
    top: 0;
    
    & > div {
        width: 100%;
        min-width: 320px;
        max-width: 1440px;
        display: flex;
        align-items: center;
        margin: 0 2vw;
        
        @media (min-width:501px) {
            height: 60px;
            justify-content: space-between;
            flex-direction: row;
        }

        @media (max-width:500px) {
            height: 100px;
            flex-direction: column;
            justify-content: space-evenly;
        }
    }
`

export const HeaderBtns = styled.nav`
    width: 200px;
    height: 30px;
    display: flex;
    justify-content: space-between;
`

export const SectionProfile = styled.section`    
    min-width: 320px;
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;
    margin-top: 80px;
    display: flex;
    
    @media (min-width:1101px) {
        justify-content: space-between;
        flex-direction: row;
        gap: 5px;
    }

    @media (max-width:1100px) {
        flex-direction: column;
        gap: 20px;
    }
    
    @media (max-width:500px) {
        margin-top: 130px;
    }
    
`

export const InfosContent = styled.section`
    width: 100%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    
    @media (min-width:1101px) {
        height: 400px;
        max-width: 810px;
        justify-content: space-between;
        
    }
    @media (max-width:1100px) {        
        max-width: 100%;
        margin: 0 auto;
        margin-bottom: 50px;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
    }   
`

export const InfosContent__Infos = styled.div`
    width: 100%;
    max-width: 810px;
    height: 100%;
    max-height: 295px;
    display: flex;

    @media (min-width:1101px) {
        flex-direction: column;
        justify-content: space-between;
    }

    @media (max-width:1100px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: space-between;
    }

    @media (max-width:550px) {
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
`

export const StacksContent = styled.div`    
    min-width: 300px;
    max-width: 810px;
    background-color: var(--white);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 8px;
    padding: 10px;
    gap: 10px;
    justify-content: space-between;
    
    @media (min-width: 1101px){
        
    }

    @media (max-width: 1100px){       
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
    }

    /* @media (max-width: 500px){       
        justify-content: space-evenly;
        flex-wrap: wrap;
    } */
`

export const MainCards = styled.main`    
    width: 100%;
    min-width: 320px;
    max-width: 1440px;
    height: 900px;
    display: flex;
    flex-direction: column;
    
    @media (min-width:1101px) {
        margin: 30px auto;

    }
`

export const MainCardsContent = styled.ul`
    background-color: var(--grey2);
    width: 100%;
    height: 100%;
    min-width: 320px;
    max-width: 1440px;    
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-radius: 8px;

    @media (max-width:550px) {
        flex-direction: column;
        height: 350px;
        overflow-x: scroll;
    }
    
`
export const Footer = styled.footer`
    width: 100%;    
    margin: 0 auto;
    display: flex;
    justify-content: center;
    border-top: solid 1px var(--grey1);
    color: var(--white);
    font-style: italic;
    background-color: var(--black);
    padding: 10px 0;
`