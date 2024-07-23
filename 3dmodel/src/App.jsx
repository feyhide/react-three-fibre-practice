import { useState , Suspense} from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment,OrbitControls } from '@react-three/drei'
import Scene from '../public/Scene'

function App() {
const [count, setCount] = useState(0)

  return (
    <>
    <Canvas>
    <directionalLight
    position={[3.3, 1.0, 4.4]}
    castShadow
    intensity={Math.PI * 2}
    />
      <OrbitControls/>
      <ambientLight intensity={1}/>
      <Suspense fallback={null}>
          <Scene position={[0,0,0]}/>
      </Suspense>
      <Environment preset='sunset'/>
    </Canvas>
    </>
  )
}

export default App