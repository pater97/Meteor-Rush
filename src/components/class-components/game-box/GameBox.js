import { useEffect, useState } from "react";
import { Howl, Howler } from "howler";
import "./gamebox.css"

//img
import amogus from "../../../assets/images/amogus.png";
import Column from "../../../assets/images/column.png";
import Meteor from "../../../assets/images/layers/meteor-square.png";
import Jump from "../../../assets/audios/Jump.wav"
import Hit from "../../../assets/audios/Explosion.wav"
import Point from "../../../assets/audios/Point.wav"

//components
import Character from "../../functional-components/character/Character";
import Obstacle from "../../functional-components/obstacle/Obstacle";
import { useNavigate } from "react-router-dom";

const jump = new Howl({
  src: Jump,
  html5: true,
  autoplay: true,
  loop: true,
  volume: 0.2,
});

const point = new Howl({
  src: Point,
  html5: true,
  autoplay: true,
  loop: true,
  volume: 0.2,
});

const hit = new Howl({
  src: Hit,
  html5: true,
  autoplay: true,
  loop: true,
  volume: 0.2,
});

function GameBox() {
  
  const BOX_HEIGHT = 100;
  const BOX_WIDTH = window.screen.width;
  const GRAVITY = 10;
  const CHARACTER_LEFT = 20;
  const JUMP_HEIGHT = 1000; //distanza di salto

  const [charaPosition, setCharaPosition] = useState(80);
  const [score, setScore] = useState(0);
  const [size, setSize] = useState(1);
  const [obstacle, setObstacle] = useState([
    {
      left: BOX_WIDTH,
      top: 50,
      width: 50,
    },
    {
      left: BOX_WIDTH + BOX_WIDTH / 2,
      top: 50,
      width: 50,
    },
  ]);

  
  let navigate = useNavigate()
  // funzione della gravità
  useEffect(() => {
    //FALLING DOWN
    let timeId = null;
    if (charaPosition < BOX_HEIGHT - 20) {
      timeId = setInterval(() => {
        setCharaPosition(charaPosition + GRAVITY);
      }, 60);
    }
    return () => {
      clearInterval(timeId);
    };
  }, [charaPosition]);

  // collision check
  useEffect(() => {
    const elem = document.getElementById("obstacle-container");
    const rec = elem.getBoundingClientRect();

    const pos = document.getElementById("sprite-container");
    const char = pos.getBoundingClientRect();

    const collisionChecker = !(
      char.y + char.height < rec.y ||
      char.y > rec.y + rec.height ||
      char.x + char.width < rec.x ||
      char.x > rec.x + rec.width
    );

    if (collisionChecker) {
      hit.once()
      navigate("/gameover")
    }
  }, [charaPosition, obstacle]);
  //
  //Riposiziona i meteoriti
  useEffect(() => {
    let flag = false;
    let timeId = setInterval(() => {
      let newPosition = obstacle.map((elem, key) => {
        key = Math.random();
        if (elem.left >= -elem.width) {
          elem.left = elem.left - 10;
        } else {
          flag = true;
        }
        return elem;
      });
      if (flag === true) {
        setScore(score+1)
        newPosition.shift();
        newPosition.push({
          top: Math.floor(Math.random() * 90),
          left: BOX_WIDTH,
          width: Math.floor(Math.random() * 200) + 50,
        });
      }
      setObstacle(newPosition);
    }, 24);
    return () => {
      clearInterval(timeId);
    };
  });

  //modifica size dello sprite
  useEffect(() => {
    if (window.screen.height < 700) {
      setSize(2);
    } else {
      setSize(1);
    }
  }, [window.screen.height]);

  // funzione per saltare
  function handleClick() {
    if (charaPosition - JUMP_HEIGHT < 0) {
      setCharaPosition(0);
    } else {
      setCharaPosition(charaPosition - JUMP_HEIGHT);
    }
  }

  return (
    <div
      id="gamebox"
      onClick={handleClick}
      style={{
        overflow: "hidden",
      }}
    >
      <div className="scoreBox">
        <h6>
          SCORE
        <span > {score}</span>
        </h6>
      </div>
      <Character
        img={amogus}
        position={`${charaPosition.toString() + "vh"}`}
        left={`${CHARACTER_LEFT.toString() + "vw"}`}
        size={size}
      />

      {obstacle.map((obs, key) => {
        // console.log("obstacle", obs);
        return (
          <Obstacle
            img={Meteor}
            positionTop={`${obs.top.toString() + "vh"}`}
            positionLeft={obs.left}
            width={obs.width}
          />
        );
      })}
    </div>
  );
}

export default GameBox;
