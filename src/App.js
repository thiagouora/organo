import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const times = [
    {
      nome: "Tank",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
    {
      nome: "Healer",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Suporte",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "DPS",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
  ];

  const [players, setPlayer] = useState([]);

  const aoNovoPlayerAdicionado = (player) => {
    setPlayer([...players, player]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoPlayerCadastrado={(player) => aoNovoPlayerAdicionado(player)}
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          players={players.filter((player) => player.funcao === time.nome)}
        />
      ))}
    </div>
  );
}

export default App;
