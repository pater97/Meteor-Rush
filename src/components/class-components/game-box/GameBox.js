import { useEffect, useState } from "react";

//img
import amogus from "../../../assets/images/amogus.png";
import Column from "../../../assets/images/column.png";
import Meteor from "../../../assets/images/layers/meteor3.png";

//components
import Character from "../../functional-components/character/Character";
import Obstacle from "../../functional-components/obstacle/Obstacle";


function GameBox() {
  const BOX_HEIGHT = 100;
  const BOX_WIDTH = window.screen.width;
  const GRAVITY = 3;
  const OBSTACLE_HEIGHT = 15;
  const CHARACTER_LEFT = 20;
  const JUMP_HEIGHT = 50; //distanza di salto

  const [charaPosition, setCharaPosition] = useState(80);
  const [obstacleY, setObstacleY] = useState(OBSTACLE_HEIGHT);
  const [obstacleWidth, setObstacleWidth] = useState(50);
  const [obstacleLeft, setObstacleLeft] = useState(BOX_WIDTH + obstacleWidth);
  const [obstacleLeft2, setObstacleLeft2] = useState(BOX_WIDTH + obstacleWidth);
  const [score, setScore] = useState(0);
  const [size, setSize] = useState(1);
  const [obstacle, setObstacle] = useState([])

  //componentDidMount
  /*useEffect(() => {
    let arrObstacle = obstacle
    setInterval(() => {

      setObstacleY(Math.floor(Math.random() * (100)));
      setObstacleWidth(Math.floor(Math.random() * 100) + 50);
      arrObstacle.push(

        <Obstacle
          img={Meteor}
          positionTop={`${obstacleY.toString() + "vh"}`}
          positionLeft={obstacleLeft}
          width={obstacleWidth}
        />

      )

      setObstacle(arrObstacle)
    }, 3000)


    return () => {
      //clearInterval(obstacle);
    }
  }, []);*/

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

  // collision check
  useEffect(() => {

    const elem = document.getElementById('obstacle-container');
    const rec = elem.getBoundingClientRect();

    const pos = document.getElementById('sprite-container');
    const char = pos.getBoundingClientRect()

    const collisionChecker = !(
      ((char.y + char.height) < (rec.y)) ||
      (char.y > (rec.y + rec.height)) ||
      ((char.x + char.width) < rec.x) ||
      (char.x > (rec.x + rec.width)));

    if (collisionChecker) {
      console.log("errore");
    }
  }, [charaPosition, obstacleY, obstacleWidth, obstacleLeft]);

  // arrivo degli ostacoli
  useEffect(() => {

    let obstacleId = null;
    if (obstacleLeft >= -obstacleWidth) {
      obstacleId = setInterval(() => {
        setObstacleLeft(obstacleLeft - 4);
      }, 24);
      return () => {
        clearInterval(obstacleId);
      };
    } else {
      setObstacleLeft(BOX_WIDTH);

      obstacle.shift();

      setObstacleY(Math.floor(Math.random() * (100)));
      setObstacleWidth(Math.floor(Math.random() * 100) + 50);
    }
    setScore((score) => score + 1);
    console.log("Score", score);
  }, [obstacleLeft]);

  /*useEffect(() => {

  }, [obstacleLeft])

  function moveLeft() {

    let obstacleId = null;
    if(obstacleLeft >= -obstacleWidth) {
      console.log("if")
      obstacleId = setInterval(() => {
        setObstacleLeft(obstacleLeft - 4);
      }, 24);
      moveLeft();
    } else {
      console.log("else")
      obstacle.shift();
    }

  }*/

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
        size={size}
      />

      {
        obstacle.map((obs, key) => {
          return (
            <div key={key}>
              {obs}
            </div>

          )
        })
      }

      <Obstacle
        img={Meteor}
        positionTop={`${obstacleY.toString() + "vh"}`}
        positionLeft={obstacleLeft}
        width={obstacleWidth}
      />

      {/*<Obstacle
        img={Meteor}
        positionTop={`${obstacleY.toString() + "vh"}`}
        positionLeft={obstacleLeft2}
        width={obstacleWidth}
    />*/}
    </div>
  );
}

export default GameBox;
