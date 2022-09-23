// import components
import GameBox from "../../components/class-components/game-box/GameBox";
import Button from "../../components/ui/button/PersonalButton";

// import css
import "../game/game.css";
import { Howl, Howler } from "howler";
import Epic from "../../assets/audios/Epic.m4a";

// import lottieControll
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useEffect, useState } from "react";


function Game() {
  const [gameStart, setGameStart] = useState(false);

  const sound = new Howl({
        src: Epic,
        html5: true,
        autoplay: true,
        loop: true,
        volume: 0.2,
      });


  function startGame() {
    setGameStart(true);
    sound.once();
    console.log("ayy");
  }

  useEffect(() => {
    return () => { 
      sound.stop()
    }
  })
  return (
    <div className="container">
      {/* layer */}
      <div className="layer1 baseSetting"></div>
      <div className="layer2 baseSetting"></div>
      <div className="layer3 baseSetting"></div>
      {/* roccie */}
      <div className="rock1 baseSetting"></div>
      <div className="rock2 baseSetting"></div>
      {/* planet */}
      <div className="planet1"></div>
      <div className="planet2"></div>
      <div className="planet3"></div>
      <div className="planet4"></div>
      {/* meteors lottie */}
      <Player
        className="lottiMeteors"
        autoplay
        loop
        src="https://assets6.lottiefiles.com/packages/lf20_vQfffuIbXS.json"
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
      {!gameStart && <Button callBack={startGame} label='PLAY' classCss="btn-start" />}
      {gameStart && <GameBox />}
    </div>
  );
}

export default Game;
