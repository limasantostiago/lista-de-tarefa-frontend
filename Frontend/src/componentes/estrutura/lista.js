import React, {useEffect, useState} from "react";
import Api from "./../../api";
import Card from "./card";
const Lista =()=>{
    const [tarefas, setTarefas] = useState([]);

  const getTarefas = async () => {
    const request = await Api.getAll();
    const dados = await request.json();
    if (dados.error) {
      console.log(dados.error);
    }
    if (dados.message) {
      console.log(dados.message);
    }
    setTarefas(dados);
  };

  useEffect(() => {
    getTarefas();
  }, []);
    return(
        <div>
          {tarefas.map((tarefa) => (
        <Card data={tarefa} key={tarefa._id} />
      ))}
        </div>
    )
};
export default Lista