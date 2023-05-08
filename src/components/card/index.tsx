import React from "react"
import { CardContentHolder, CardHolder, DescriptionCard, ImageCard, ImageCardHolder, ImageTechCard, TechsImageCard, TitleCard, ViewProjectBtn } from "./card"
// import data from '../../database'

const data = [

  {
      id: 1,
      image: '../src/assets/covers/hamburgueriav2.png',
      title: 'Hamburgueria V2',
      description: 'Sistema de compras para usuario com login e senha.',
      techs: [
          '../src/assets/techs/react.svg', 
          '../src/assets/techs/typescript.svg', 
          '../src/assets/techs/javascript.svg', 
          '../src/assets/techs/git-icon.svg'
      ],
      url: 'https://hamburgueria-v2-samirdourado.vercel.app/'
  },

  {
      id: 2,
      image: '../src/assets/covers/kenziehub.png',
      title: 'Kenzie Hub',
      description: 'Cadastro de technologias nos moldes de todoList.',
      techs: [
          '../src/assets/techs/react.svg', 
          '../src/assets/techs/typescript.svg', 
          '../src/assets/techs/javascript.svg', 
          '../src/assets/techs/git-icon.svg'
      ],
      url: 'https://react-entrega-kenzie-hub-samirdourado.vercel.app/'
  },

  {
      id: 3,
      image: '../src/assets/covers/hamburgueriav1.png',
      title: 'Hamburgueria V1',
      description: 'Carrinho de compras dinâmico.',
      techs: [
          '../src/assets/techs/react.svg', 
          '../src/assets/techs/typescript.svg', 
          '../src/assets/techs/javascript.svg', 
          '../src/assets/techs/git-icon.svg'
      ],
      url: 'https://hamburgueria-da-kenzie-samirdourado.vercel.app/'        
  },

  {
      id: 4,
      image: '../src/assets/covers/nukenzie.png',
      title: 'Nu Kenzie',
      description: 'Sistem de entrada e saída de valores.',
      techs: [
          '../src/assets/techs/react.svg', 
          '../src/assets/techs/typescript.svg', 
          '../src/assets/techs/javascript.svg', 
          '../src/assets/techs/git-icon.svg'
      ],
      url: 'https://nu-kenzie-samirdourado.vercel.app/'        
  }
]



const CardV1= () => {
  
    return(
      <>
        {
          data.length ? (
            data.map((element: any) => (                
              <CardHolder key={element.id}>
                <ImageCardHolder>
                  <ImageCard src={element.image}></ImageCard>
                </ImageCardHolder>

                <CardContentHolder>
                  <TitleCard>{element.title}</TitleCard>
                  <DescriptionCard>{element.description}</DescriptionCard>

                  <TechsImageCard >
                  {
                    element.techs.map((tech: any, pos: number) => (
                        <ImageTechCard key={pos} src={tech} />
                        ))
                      }
                  </TechsImageCard>

                  <ViewProjectBtn type={"button"} onClick={() => window.open(element.url, "_blank")} >
                    Ver Projeto
                  </ViewProjectBtn>                     
                </CardContentHolder>
              </CardHolder>
            ))
          ) : (<p>Carregando...</p>)
        }
      </>
    )

}

export default CardV1