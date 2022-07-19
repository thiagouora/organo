import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {

  const [nome, setNome] = useState("");
  const [classe, setClasse] = useState("");
  const [imagem, setImagem] = useState("");
  const [funcao, setFuncao] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoPlayerCadastrado({
      nome,
      classe,
      imagem,
      funcao,
    })
    setNome('')
    setClasse('')
    setImagem('')
    setFuncao('')
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do player</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do player"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Classe"
          placeholder="Digite sua classe no game"
          valor={classe}
          aoAlterado={(valor) => setClasse(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatori={true}
          label="Função"
          itens={props.times}
          valor={funcao}
          aoAlterado={(valor) => setFuncao(valor)}
        />
        <Botao texto="Criar Card" />
      </form>
    </section>
  );
};

export default Formulario;
