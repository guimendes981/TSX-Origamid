
import React from "react";
import Button from "./button";
import Input from "./Input";

function App() {
  const [data, setData] = React.useState("");

  return (
    <div>
      {/* <p>Total: {total}</p>
      <Button
        id="botao-principal"
        className="btn"
        onClick={incrementar}
        tamanho="1.25rem"
      >
        Incrementar
      </Button> */}
      {/* <Input  id="email" label="Email" type="email"/>
      <Input  id="nome" label="Nome"/>
      <Input  value={data} onChange={(event) => setData(event.currentTarget.value)} id="inicio" label="Início da viagem" type="date"/>
      <Input id="horario"label="Horário" type="time" /> */}
    <Button>Incrementar</Button>
    </div>
  );
}

export default App;
