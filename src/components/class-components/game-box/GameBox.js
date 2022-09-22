import { useEffect, useState } from "react";
import amogus from "../../../assets/images/amogus.png";
import Column from "../../../assets/images/column.png";
import Character from "../../functional-components/character/Character";
import Obstacle from "../../functional-components/obstacle/Obstacle";


function GameBox() {
  const BOX_HEIGHT = 100;
  const BOX_WIDTH = 100;
  const GRAVITY = 3;
  const BALLSIZE = 30; //verrà rimosso
  const OBSTACLE_HEIGHT = 15;
  const OBSTACLE_WIDTH = 21;
  const CHARACTER_LEFT = 30;
  const JUMP_HEIGHT = 50; //distanza di salto

  const [charaPosition, setCharaPosition] = useState(10);
  const [obstacleHeight, setObstacleHeight] = useState(OBSTACLE_HEIGHT);
  const [obstacleLeft, setObstacleLeft] = useState(BOX_WIDTH + OBSTACLE_WIDTH);
  const [score, setScore] = useState(0);

  // funzione della gravità
  useEffect(() => {
    //FALLING DOWN
    let timeId = null;
    if (charaPosition < BOX_HEIGHT - 20) {
      timeId = setInterval(() => {
        setCharaPosition(charaPosition + GRAVITY);
      }, 24);
    }
    return () => {
      clearInterval(timeId);
    };
  }, [charaPosition]);

  // collsion check
  useEffect(() => {
    const collisionChecker = charaPosition >= BOX_HEIGHT - obstacleHeight;
    if (
      obstacleLeft >= 0 &&
      obstacleLeft <= OBSTACLE_WIDTH &&
      collisionChecker
    ) {
      console.log("errore");
    }
  }, [charaPosition, obstacleHeight, obstacleLeft]);

  // arrivo deglio ostacoli
  useEffect(() => {
    let obstacleId = null;
    if (obstacleLeft >= -OBSTACLE_WIDTH) {
      obstacleId = setInterval(() => {
        setObstacleLeft(obstacleLeft - 4);
      }, 24);
      return () => {
        clearInterval(obstacleId);
      };
    } else {
      setObstacleLeft(BOX_WIDTH - OBSTACLE_WIDTH);
      setObstacleHeight(Math.floor(Math.random() * (BOX_HEIGHT - 300)));
    }
    setScore((score) => score + 1);
    console.log("Score", score);
  }, [obstacleLeft]);

  // funzione per saltare
  function handleClick() {
    setCharaPosition(charaPosition - JUMP_HEIGHT);
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
        width={BALLSIZE}
      />

      <Obstacle
        img={Column}
        positionTop={BOX_HEIGHT - obstacleHeight}
        positionLeft={obstacleLeft}
        width={OBSTACLE_WIDTH}
      />
    </div>
  );
}

export default GameBox;
