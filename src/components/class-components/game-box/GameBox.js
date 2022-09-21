import { useEffect, useState } from "react";
import Ball from "../../../assets/images/ball.png";
import Column from "../../../assets/images/column.png";
import Character from "../../functional-components/character/Character";
import Obstacle from "../../functional-components/obstacle/Obstacle";

function GameBox() {
  const BOX_HEIGHT = 600;
  const BOX_WIDTH = 600;
  const GRAVITY = 5;
  const BALLSIZE = 30;
  const JUMP_HEIGHT = 200;
  const OBSTACLE_HEIGHT = 100;
  const OBSTACLE_WIDTH = 40;

  const [charaPosition, setCharaPosition] = useState(500);
  const [obstacleHeight, setObstacleHeight] = useState(OBSTACLE_HEIGHT);
  const [obstacleLeft, setObstacleLeft] = useState(BOX_WIDTH + OBSTACLE_WIDTH);
  const [score, setScore] =useState(0)
  const [collider, setCollider] = useState(false)

  useEffect(() => {
    let timeId = null;
    if (charaPosition < BOX_HEIGHT - 100) {
      timeId = setInterval(() => {
        setCharaPosition((charaPosition) => charaPosition + GRAVITY);
      }, 24);
    }
    return () => {
      clearInterval(timeId);
    };
  });

  useEffect(() => {
    let obstacleId = null;
    if (obstacleLeft >= -OBSTACLE_WIDTH) {
      obstacleId = setInterval(() => {
        setObstacleLeft((obstacleLeft) => obstacleLeft - 4);
      }, 24);
      return () => {
        clearInterval(obstacleId);
      };
    } else {
      setObstacleLeft(BOX_WIDTH - OBSTACLE_WIDTH);
      setObstacleHeight(Math.floor(Math.random()*(BOX_HEIGHT-300)))
    }
    setScore((score) => score +1)
    console.log("Score", score)
  });

  function handleClick() {
    let newCharaPosition = charaPosition - JUMP_HEIGHT;
    if (newCharaPosition < 0) {
      setCharaPosition(0);
    } else {
      setCharaPosition(newCharaPosition);
    }
  }

  useEffect (() => {
    const collisionChecker = 
    charaPosition >= (BOX_HEIGHT - obstacleHeight)
  })

  return (
    <div
      onMouseDown={handleClick}
      style={{
        width: BOX_WIDTH,
        height: BOX_HEIGHT,
        backgroundColor: "blue",
        overflow:"hidden"
      }}
    >
      <Character img={Ball} position={charaPosition} width={BALLSIZE} />

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
