import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Sky } from 'drei';
import { Vector3 } from 'three';
import { Physics } from 'use-cannon';
import { Ground } from './Ground';
import { Camera } from './Camera';
import { Player } from './Player';
import { Cube, useCubeStore } from './Cube';

function App() {
  const cubes = useCubeStore(state => state.cubes)

  return (
   <div className="app">
      <div><h2>Developed By @: <span>Siva Sankar Reddy</span></h2></div>
     <div className="app__canvas">
     <Canvas shadowMap sRGB gl={{ alpha: false }}>
      <Camera />
      <Sky sunPosition={new Vector3(100, 10, 100)}/>
      <ambientLight intensity={0.3}/>
      <pointLight 
        castShadow
        intensity={0.8}
        position={[100, 100, 100]}
      />
      <Physics gravity={[0, -30, 0]}>
        <Ground />
        <Player />
        <Cube position={[0, 0.5, -10]} />
        {
          cubes.map(cube => cube)
        }
      </Physics>
    </Canvas>
     </div>
     
   </div>
  )
}

export default App;
