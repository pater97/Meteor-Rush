import { useEffect, useState } from "react";

//img
import amogus from "../../../assets/images/amogus.png";
import Column from "../../../assets/images/column.png";
import Meteor from "../../../assets/images/layers/meteor-square.png";

//components
import Character from "../../functional-components/character/Character";
import Obstacle from "../../functional-components/obstacle/Obstacle";

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

  //componentDidMount

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
      console.log("errore");
    }
  }, [charaPosition, obstacle]);

  useEffect(() => {
    let flag = false;
    let timeId = setInterval(() => {
      let newPosition = obstacle.map((elem, key) => {
        key = Math.random();
        if (elem.left >= -elem.width) {
          elem.left = elem.left - 5;
        } else {
          flag = true;
        }
        return elem;
      });
      if (flag === true) {
        newPosition.shift();
        newPosition.push({
          top: Math.floor(Math.random() * 100),
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
