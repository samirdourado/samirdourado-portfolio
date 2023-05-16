import React from "react"
import { StacksContent } from "../../styles/divs"
import { StackImage } from "../../styles/images"

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

const StackContent = () => {
    return(
        <StacksContent>
            <StackImage src={htmlImg} alt="html"/>
            <StackImage src={cssImg} alt="css"/>
            <StackImage src={javascriptImg} alt="Javascript"/>
            <StackImage src={reactImg} alt="React"/>
            <StackImage src={typescriptImg} alt="Typescript"/>              
            <StackImage src={gitImg} alt="Git"/>
            <StackImage src={figmaImg} alt="Figma"/>
            <StackImage src={photoshopImg} alt="Photoshop"/>
            <StackImage src={illustratorImg} alt="Illustrator"/>
            <StackImage src={coreldrawImg} alt="Corel Draw"/>
        </StacksContent>
    )
}

export default StackContent