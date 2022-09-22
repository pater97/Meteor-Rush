import './obstacle.css';

function Obstacle(props) {
  return (
    <div
      id='obstacle-container'
      className='obstacle-container'
      style={{
        overflow: "hidden",
        position: "absolute",
        top: props.positionTop,
        left: props.positionLeft,
        width: props.width,
      }}
    >
      <img
        src={props.img}
        style={{
          width: props.width,
        }}
      />
    </div>
  );
}

export default Obstacle;
