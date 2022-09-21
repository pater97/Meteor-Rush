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
  const CHARACTER_LEFT = 50;
  const JUMP_SPEED = 10;

  const [charaPosition, setCharaPosition] = useState(200);
  const [obstacleHeight, setObstacleHeight] = useState(OBSTACLE_HEIGHT);
  const [obstacleLeft, setObstacleLeft] = useState(BOX_WIDTH + OBSTACLE_WIDTH);
  const [score, setScore] = useState(0);
  const [collider, setCollider] = useState(false);
  const [jump, setJump] = useState(0);

  useEffect(() => {
    //FALLING DOWN
    let timeId = null;
    if (charaPosition < BOX_HEIGHT - 100 + jump) { //rimuovere jump
      timeId = setInterval(() => {
        setCharaPosition((charaPosition) => charaPosition + GRAVITY);
      }, 24);
    } else if (charaPosition > BOX_HEIGHT - 100 + jump) { // rimuovere questo
      setCharaPosition ((charaPosition) => charaPosition - JUMP_SPEED)
    }
    return () => {
      clearInterval(timeId);
    };
  });

  function handleClick() {
    setJump((jump) => charaPosition - JUMP_HEIGHT);
  }

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
      setObstacleHeight(Math.floor(Math.random() * (BOX_HEIGHT - 300)));
    }
    setScore((score) => score + 1);
    console.log("Score", score);
  });

  function handleLEClick() {
    //JUMPING UP
    let timeId = null;
    let jumpObjective = charaPosition - JUMP_HEIGHT;
    console.log("jumpObjective", jumpObjective);
    if (jumpObjective < 0) {
      console.log("i passed the roof");
      setCharaPosition(0);
    } else if (charaPosition >= jumpObjective) {
      timeId = setInterval(() => {
        setCharaPosition((charaPosition) => charaPosition - JUMP_SPEED);
      }, 24);
      console.log("charaPosition", charaPosition);
    }
    return () => {
      clearInterval(timeId);
    };
  }

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
        img={Ball}
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
