import { useEffect, useState } from "react";
import Ball from "../../../assets/images/ball.png";
import Column from "../../../assets/images/column.png";
import Character from "../../functional-components/character/Character";
import Obstacle from "../../functional-components/obstacle/Obstacle";
import sideAnimation from "../../../assets/images/amogus.png";

function GameBox() {
  const BOX_HEIGHT = 600;
  const BOX_WIDTH = 600;
  const GRAVITY = 5
  const BALLSIZE = 30;
  const OBSTACLE_HEIGHT = 100;
  const OBSTACLE_WIDTH = 40;
  const CHARACTER_LEFT = 50;
  const JUMP_HEIGHT = 200; //distanza di salto

  const [charaPosition, setCharaPosition] = useState(200);
  const [obstacleHeight, setObstacleHeight] = useState(OBSTACLE_HEIGHT);
  const [obstacleLeft, setObstacleLeft] = useState(BOX_WIDTH + OBSTACLE_WIDTH);
  const [score, setScore] = useState(0);


  // funzione della gravità
  useEffect(() => {
    //FALLING DOWN
    let timeId = null;
    timeId = setInterval(() => {
      setCharaPosition(charaPosition + GRAVITY);
    }, 24);
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
  },[obstacleLeft]);

  // funzione per saltare
  function handleClick() {
    setCharaPosition(charaPosition - JUMP_HEIGHT);
  }

  return (
    <div
      onClick={handleClick}
      style={{
        width: BOX_WIDTH,
        height: BOX_HEIGHT,
        backgroundColor: "blue",
        overflow: "hidden",
      }}
    >
      <Character
        img={sideAnimation}
        position={charaPosition}
        left={CHARACTER_LEFT}
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
