import React, { useState, useEffect } from "react";
import { InfosContent__Infos } from "../../styles/divs";
import { GoldSpan, TextBox, WhiteTitleSobre } from "../../styles/typography";
import { PortfolioButton } from "../../styles/buttons";
// import AgeCounter from "../ageCounter";

const About = () => {
    const dateToday = new Date()
    const myBirthday = new Date("1985-08-31")
    const myAge = dateToday.getFullYear() - myBirthday.getFullYear()
  
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval: number = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount === myAge) {
                    clearInterval(interval)
                    return prevCount
                    
                    } else {
                        return prevCount + 1
                    }
                })
            }, 15)
    
        return () => {
          clearInterval(interval);
        };
      }, []);
    
    return(        
        <InfosContent__Infos>
            <div>
                <TextBox>Oi, bem vindo ao meu portfólio, aqui você vai encontrar alguns projetos que ja fiz e participei.</TextBox>
                <PortfolioButton as="a" href="#meus">Ver Portfólio</PortfolioButton>
            </div>

            <div>
                <WhiteTitleSobre>Sobre <GoldSpan>Samir</GoldSpan></WhiteTitleSobre>
                <TextBox>Olá meu nome é Samir <GoldSpan>Dourado</GoldSpan>, tenho <GoldSpan>{count}</GoldSpan> anos, e desde sempre gosto de tecnologia e artes. Estou me formando em desenvolvedor Full Stack e adquiri habilidades em diversas tecnologias front-end e back-end.</TextBox>                  
            </div>
        </InfosContent__Infos>
    )
}

export default About