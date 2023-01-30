import profileImg from "./assets/samir_400x400.jpg"
import htmlImg from "./assets/html5.svg"
import cssImg from "./assets/css3.svg"
import javascriptImg from "./assets/javascript.svg"
import reactImg from "./assets/react.svg"
import typescriptImg from "./assets/typescript.svg"
import gitImg from "./assets/git-icon.svg"
import figmaImg from "./assets/figma.svg"
import photoshopImg from "./assets/photoshop-cc.svg"
import illustratorImg from "./assets/illustrator-cc.svg"
import coreldrawImg from "./assets/corelDraw.svg"

import { Card } from "./components/card"
import { GlobalStyle } from "./styles/globalstyles"
import { Container, Header, HeaderBtns, InfosContent, Section, StacksContent } from "./styles/divs"
import { GoldSpan, TextBox, TitleLogo, WhiteTitle } from "./styles/typography"
import { BtnNav, PortfolioButton } from "./styles/buttons"
import { ProfileFigure, StackImage } from "./styles/images"

function App() {
  
  return (
    <>
      <Container>
        <GlobalStyle/>

        <Header>
          <div>
            <TitleLogo>Samir <GoldSpan>Dourado</GoldSpan></TitleLogo>
            <HeaderBtns>
              <BtnNav>Linkedin</BtnNav>
              <BtnNav>Curriculo</BtnNav>
            </HeaderBtns>
          </div>
        </Header>

        <Section>
          <ProfileFigure>
            <img src={profileImg}></img>
          </ProfileFigure>

          <InfosContent>
            <div>
              <TextBox>Pai, desenvolvedor Front End, apaixonado por tecnologia.</TextBox>
              <PortfolioButton>Ver Portfólio</PortfolioButton>
            </div>

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

            <div>
              <WhiteTitle>Sobre <GoldSpan>Samir</GoldSpan></WhiteTitle>
              <TextBox>Oi, bem vindo ao meu portfólio, meu nome é Samir Dourado, aqui você vai encontrar alguns projetos que ja fiz.</TextBox>
            </div>
          </InfosContent>

        </Section>



        {/* <main>
          <ul>
            <Card/>
          </ul>
        </main> */}
              
      </Container>
    </>
    
  )
}
export default App