import cardImg from "../../assets/card-image.png"

export const Card = () => {
    return(
        <li>
            <figure>
              <img src={cardImg} alt="Card IMage"></img>
            </figure>
            <div>
              <h3>Hamburgueria V2</h3>
              <p>Carrinho de compras para sistema de compras de hamburguers e refrigerantes.Carrinho de compras para sistema de compras de...</p>
              <div>
                <img src="" alt="React"></img>
                <img src="" alt="Typescript"></img>
                <img src="" alt="Git"></img>
                <img src="" alt="Figma"></img>
              </div>
              <button>Acessar Site</button>
            </div>
          </li>
    )

}