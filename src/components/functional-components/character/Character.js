function Character (props) {
return(
    <img
        src={props.img}
        style={{
          position: "absolute",
          top: props.position,
          left: props.left,
          width: props.width,
          transition: 'all 500ms'
        }}
      />)
}

export default Character