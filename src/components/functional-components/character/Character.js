import { useEffect, useState } from 'react';
import { useSprite } from 'react-sprite-animator';
import './character.css';

function Character(props) {

  let style = useSprite({
    sprite: props.img,
    width: 128,
    height: 150,
    scale: props.size,
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
    <div className='sprite-container'
      style={{
        position: "absolute",
        top: props.position,
        left: props.left,
        transition: 'all 500ms',
      }}
    >
      <div className="sprite" style={style} />
    </div>
  )
}

export default Character