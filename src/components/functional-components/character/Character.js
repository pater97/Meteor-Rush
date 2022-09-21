function Character (props) {
return(
    <img
        src={props.img}
        style={{
          position: "absolute",
          top: props.position,
          width: props.width,
        }}
      />)
}

export default Character