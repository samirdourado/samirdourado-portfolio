import React from "react"
import { CardContentHolder, CardHolder, DescriptionCard, GroupBtn, ImageCard, ImageCardHolder, ImageTechCard, TechsImageCard, TitleCard, ViewProjectBtn } from "./card"
import data from '../../database'


const CardV1 = () => {
  
    return(
      <>
        {
          data.length ? (
            data.map((element: any, pos) => (                
              <CardHolder key={element.pos}>
                <ImageCardHolder>
                  <ImageCard src={element.image}/>
                </ImageCardHolder>

                <CardContentHolder>
                  <TitleCard>{element.title}</TitleCard>
                  <DescriptionCard>{element.description}</DescriptionCard>

                  <TechsImageCard >
                  {
                    element.techs.map((tech: any, pos: number) => (
                        <ImageTechCard key={pos} src={tech} alt={"tech icon"} />
                        ))
                      }
                  </TechsImageCard>

                  <GroupBtn>
                  <ViewProjectBtn type={"button"} onClick={() => window.open(element.url, "_blank")}>Ver Projeto</ViewProjectBtn>
                  <ViewProjectBtn type={"button"} onClick={() => window.open(element.repo, "_blank")}>Ver Repositório</ViewProjectBtn>
                  </GroupBtn>

                </CardContentHolder>
              </CardHolder>
            ))
          ) : (<p>Carregando...</p>)
        }
      </>
    )

}

export default CardV1