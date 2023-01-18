import React from "react";

function InfosUsuario(props) {
  
  return(
    <div className="box-usuario">
        <img src={props.image} alt="" />
        <h5>{props.name}</h5>
      </div>
  )
}

export default InfosUsuario