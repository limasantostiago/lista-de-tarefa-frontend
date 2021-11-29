import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const tarefa = props.data;
  return (
      <Link to={`/detalhes/${tarefa._id}`}>
      <div key={tarefa._id}>
          <h2>{tarefa.titulo}</h2>
          <h2>{tarefa.decricao}</h2>
          <h2>{tarefa.prioridade}</h2>
          <h2>{tarefa.status}</h2>
          <h2>{tarefa.prazo}</h2>
      </div>
      </Link>
  )};
  export default Card