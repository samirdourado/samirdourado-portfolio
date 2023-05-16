import React from "react"
import profileImg from "../../assets/samir_400x400.jpg"
import { GlobalStyle } from "../../styles/globalstyles"
import { Container, Footer, Header, HeaderBtns, InfosContent, MainCards, MainCardsContent, SectionProfile } from "../../styles/divs"
import { GoldSpan, TitleLogo, WhiteTitleProjetos } from "../../styles/typography"
import { BtnNav } from "../../styles/buttons"
import { ProfileFigure } from "../../styles/images"
import CardV1 from "../../components/card/index.jsx"
import {BsLinkedin, BsFiletypePdf} from "react-icons/bs"
import StackContent from "../../components/stacks"
import About from "../../components/about"


function HomePage() {

  const linkedinLink = "https://www.linkedin.com/in/samirdourado"
  const curriculoLink = "https://drive.google.com/file/d/12dYq-AoH4xtVn78SJLjzp7WuZPIPnf9o/view?usp=share_link"
  
  return (
    
      <Container>        
        <GlobalStyle/>
        
        <div>
          <Header>
            <div>
              <TitleLogo>Samir <GoldSpan>Dourado</GoldSpan></TitleLogo>
              <HeaderBtns>
                <BtnNav type="button" onClick={() => window.open(linkedinLink, "_blank")}><BsLinkedin size={20}/>Linkedin</BtnNav>
                <BtnNav type="button" onClick={() => window.open(curriculoLink, "_blank")}><BsFiletypePdf size={20}/>Currículo</BtnNav>
              </HeaderBtns>
            </div>
          </Header>

          <SectionProfile>
            <ProfileFigure>
              <img src={profileImg}></img>
            </ProfileFigure>

            <InfosContent>
              <About/>
              <StackContent/>
            </InfosContent>
          </SectionProfile>
        </div>

        <MainCards>
          <WhiteTitleProjetos id="meus">Meus <GoldSpan>Projetos</GoldSpan></WhiteTitleProjetos>
          <MainCardsContent>
            <CardV1/>
          </MainCardsContent>
        </MainCards>

        <Footer>
          <p>&copy; Samir Dourado</p>
        </Footer>
      </Container>
  )
}

export default HomePage