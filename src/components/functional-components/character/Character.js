import { useEffect, useState } from 'react';
import { useSprite } from 'react-sprite-animator';

function Character(props) {

  let style = useSprite({
    sprite: props.img,
    width: 128,
    height: 150,
    scale: 1,
    shouldAnimate: true,
    startFrame: 0,
    fps: 10,
    frameCount: 8,
    direction: 'vertical',
    wrapAfter: 1,
  })

  useEffect(() => {

  }, [])

  return (
    <>
      <div
        src={props.img}
        style={{
          position: "absolute",
          top: props.position,
          left: props.left,
          width: props.width,
          transition: 'all 500ms',
          bottom: props.bottom
        }}
      />
      <div style={style} />
    </>
  )
}

export default Character