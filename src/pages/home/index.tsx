import React from "react"
import profileImg from "../../assets/samir_400x400.jpg"
import htmlImg from "../../assets/techs/html5.svg"
import cssImg from "../../assets/techs/css3.svg"
import javascriptImg from "../../assets/techs/javascript.svg"
import reactImg from "../../assets/techs/react.svg"
import typescriptImg from "../../assets/techs/typescript.svg"
import gitImg from "../../assets/techs/git-icon.svg"
import figmaImg from "../../assets/techs/figma.svg"
import photoshopImg from "../../assets/techs/photoshop-cc.svg"
import illustratorImg from "../../assets/techs/illustrator-cc.svg"
import coreldrawImg from "../../assets/techs/corelDraw.svg"

import { GlobalStyle } from "../../styles/globalstyles"
import { Container, Footer, Header, HeaderBtns, InfosContent, InfosContent__Infos, MainCards, MainCardsContent, SectionProfile, StacksContent } from "../../styles/divs"
import { GoldSpan, TextBox, TitleLogo, WhiteTitleProjetos, WhiteTitleSobre } from "../../styles/typography"
import { BtnNav, PortfolioButton } from "../../styles/buttons"
import { ProfileFigure, StackImage } from "../../styles/images"
import CardV1 from "../../components/card/index.jsx"
import {BsLinkedin, BsFiletypePdf} from "react-icons/bs"

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
              <InfosContent__Infos>
                <div>
                  <TextBox>Pai, desenvolvedor Front End, apaixonado por tecnologia.</TextBox>
                  <PortfolioButton as="a" href="#meus">Ver Portfólio</PortfolioButton>
                </div>

                <div>
                  <WhiteTitleSobre>Sobre <GoldSpan>Samir</GoldSpan></WhiteTitleSobre>
                  <TextBox>Oi, bem vindo ao meu portfólio, meu nome é Samir Dourado, aqui você vai encontrar alguns projetos que ja fiz.</TextBox>
                </div>
              </InfosContent__Infos>

              <StacksContent>
                <StackImage src={htmlImg} alt="html"></StackImage>
                <StackImage src={cssImg} alt="css"></StackImage>
                <StackImage src={javascriptImg} alt="Javascript"></StackImage>
                <StackImage src={reactImg} alt="React"></StackImage>
                <StackImage src={typescriptImg} alt="Typescript"></StackImage>              
                <StackImage src={gitImg} alt="Git"></StackImage>
                <StackImage src={figmaImg} alt="Figma"></StackImage>
                <StackImage src={photoshopImg} alt="Photoshop"></StackImage>
                <StackImage src={illustratorImg} alt="Illustrator"></StackImage>
                <StackImage src={coreldrawImg} alt="Corel Draw"></StackImage>
              </StacksContent>

              
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