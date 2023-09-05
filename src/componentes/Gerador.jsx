import "./Gerador.css";
import React, { useState } from "react";
export default function Gerador() {
  const [nomeGerado, setNomeGerado] = useState("");

  const gerarNome = () => {
    fetch("https://randomuser.me/api/?region=br")
      .then((response) => response.json())
      .then((data) => {
        const nome = data.results[0].name.first;
        setNomeGerado(`${nome}`);
      })
      .catch((error) => {
        console.error("Ocorreu um erro:", error);
      });
  };

  return (
    <>
      <button onClick={gerarNome}>Gerar Nome</button>
      <p id="nomeGerado">{nomeGerado}</p>
    </>
  );
}
