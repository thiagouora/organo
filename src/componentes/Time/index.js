import Player from "../Player";
import "./Time.css";

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };
  return props.players.length > 0 ? (
    <section className="time" style={css}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="players">
        {props.players.map((player) => (
          <Player
            corDeFundo={props.corPrimaria}
            key={player.nome}
            nome={player.nome}
            classe={player.classe}
            imagem={player.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
