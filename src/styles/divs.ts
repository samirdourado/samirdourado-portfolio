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
    /* height: 100px; */
    margin: 0 auto;    
    display: flex;
    justify-content: center;
    border-bottom: solid 1px var(--grey1);
    margin-bottom: 40px;
    
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
    width: 150px;
    height: 30px;
    display: flex;
    justify-content: space-between;
`

export const Section = styled.section`    
    width: 100%;
    min-width: 320px;
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;    
    display: flex;
    /* gap: 150px */
    justify-content: space-between;
    /* border-bottom: solid 1px var(--grey1); */
`

export const InfosContent = styled.section`
    /* background-color: antiquewhite; */
    width: 100%;
    max-width: 810px;
    height: 400px;    
    /* margin-right: 2vw; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* border-bottom: solid 1px var(--grey1); */
`

export const StacksContent = styled.div`
    width: 100%;
    height: 74px;
    background-color: var(--white);
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`