

function Obstacle(props) {
  return (
    <img
      src={props.img}
      style={{
        overflow:"hidden",
        position: "relative",
        top: props.positionTop,
        left:props.positionLeft,
        width: props.width,
      }}
    />
  );
}

export default Obstacle;
