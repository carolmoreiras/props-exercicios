import React from "react";
import InfosUsuario from "./InfosUsuario";

export function CardVideo(props) {
  // const titulo = "Título do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }

  const nomeUsuario = "Carol"

  const userImage = "https://picsum.photos/400/400?a=1"

  return(
    <div className="box-pagina-principal" onClick={reproduzVideo}>
        <img src={props.informacoes.imagem} alt="" />
        <h4>{props.informacoes.titulo}</h4>
        <InfosUsuario name={nomeUsuario} image={userImage}/>
      </div>
  )
}

export default CardVideo