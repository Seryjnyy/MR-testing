import React from 'react'
import {ARCanvas, ARMarker} from "@artcom/react-three-arjs"

export default function ArScene2() {
  return (
    <ARCanvas
    camera={ { position: [0, 0, 0] } }
    onCreated={ ({ gl }) => {
      gl.setSize(window.innerWidth, window.innerHeight)
    } }>
    <ambientLight />
    <pointLight position={ [10, 10, 0] }  />
    <ARMarker
      type={ "pattern" }
      patternUrl={ "data/hiro.patt" }>
      <mesh>
        <boxBufferGeometry args={ [1, 1, 1] } />
        <meshStandardMaterial color={ "green" } />
      </mesh>
    </ARMarker>
  </ARCanvas>
  )
}
