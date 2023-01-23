import profileImg from "./assets/samir_400x400.jpg"
import { Card } from "./components/card"
import { GlobalStyle } from "./styles/globalstyles"
import { Container, Header, HeaderBtns, InfosContent, Section } from "./styles/divs"
import { TitleLogo } from "./styles/typography"
import { BtnNav } from "./styles/buttons"
import { ProfileFigure } from "./styles/images"

function App() {
  
  return (
    <>
      <Container>
        <GlobalStyle/>

        <Header>
          <div>
            <TitleLogo>Samir <span>Dourado</span></TitleLogo>
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
              <p>Pai, desenvolvedor Front End, apaixonado por tecnologia.</p>
              <button>Ver Portfólio</button>
            </div>

            <div>
              <img src="" alt="html"></img>
              <img src="" alt="css"></img>
              <img src="" alt="Javascript"></img>
              <img src="" alt="React"></img>
              <img src="" alt="Typescript"></img>
              
              <img src="" alt="Git"></img>
              <img src="" alt="Figma"></img>
              <img src="" alt="Photoshop"></img>
              <img src="" alt="Illustrator"></img>
              <img src="" alt="Corel Draw"></img>
            </div>

            <div>
              <h2>Sobre <span>Samir</span></h2>
              <p>Oi, bem vindo ao meu portfólio, meu nome é Samir Dourado, aqui você vai encontrar alguns projetos que ja fiz.</p>
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