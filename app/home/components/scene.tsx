/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useRef } from 'react'
import * as THREE from 'three'
import { RGBELoader } from 'three-stdlib'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import {
  Loader,
  Center,
  Text3D,
  Instance,
  Instances,
  Environment,
  Lightformer,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  MeshTransmissionMaterial,
  PerspectiveCamera,
} from '@react-three/drei'
import ExtrudedSVG from './utils/extrudedSvg'
// import {
//   EffectComposer,
//   HueSaturation,
//   BrightnessContrast,
// } from '@react-three/postprocessing'

function MainApp() {
  return (
    <>
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{
          powerPreference: 'high-performance',
          alpha: true,
          antialias: true,
          stencil: false,
          depth: true,
          logarithmicDepthBuffer: true,
          // preserveDrawingBuffer: true,
        }}
        // linear={true}
      >
        <Scene />
      </Canvas>
      <Loader />
    </>
  )
}

const Scene = () => {
  const userCam = useRef<THREE.PerspectiveCamera | undefined>(null)

  useFrame(({ mouse }) => {
    const UserCam = userCam.current
    if (UserCam) {
      UserCam.position.z = THREE.MathUtils.lerp(
        UserCam.position.z,
        mouse.y * Math.PI * -0.5 + 18,
        0.03,
      )
      // UserCam.rotation.x = THREE.MathUtils.lerp(
      //   UserCam.rotation.x,
      //   -mouse.y * Math.PI * 0.02 - 0.05,
      //   0.03,
      // )
      UserCam.position.x = THREE.MathUtils.lerp(
        UserCam.position.x,
        mouse.x * Math.PI - 6,
        0.03,
      )
      // UserCam.rotation.y = THREE.MathUtils.lerp(
      //   UserCam.rotation.y,
      //   mouse.x * Math.PI * 0.02,
      //   0.03,
      // )
    }
  })

  return (
    <>
      <group>
        <PerspectiveCamera
          makeDefault
          position={[-6, 16, 18]}
          fov={50}
          rotation={[-Math.PI / 5, 0, 0]}
          ref={userCam}
        />
      </group>
      {/* <color attach='background' args={['#fff']} /> */}
      {/* <Text
          config={config}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 2.25]}
        >
          Artscape
        </Text> */}
      <ExtrudedSVG url='./logo_3d.svg' position={[0, 0, 0]} />
      <Grid />
      {/* <OrbitControls /> */}
      <Environment resolution={32}>
        <group rotation={[-Math.PI / 7, -0.3, 0]}>
          <Lightformer
            intensity={20}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={[10, 10, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={[10, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={[10, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={[20, 2, 1]}
          />
          <Lightformer
            type='ring'
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-0.1, -1, -5]}
            scale={10}
          />
        </group>
      </Environment>
      <AccumulativeShadows
        frames={100}
        color={'#07ebb5'}
        colorBlend={5}
        toneMapped={true}
        alphaTest={0.9}
        opacity={1}
        scale={30}
        position={[0, 0, 0]}
      >
        <RandomizedLight
          amount={4}
          radius={10}
          ambient={0.5}
          intensity={1}
          position={[0, 10, -10]}
          size={15}
          mapSize={1024}
          bias={0.0001}
        />
      </AccumulativeShadows>
    </>
  )
}

const Grid = ({
  number = 23,
  lineWidth = 0.026,
  height = 0.5,
}: {
  number?: number
  lineWidth?: number
  height?: number
}) => (
  // Renders a grid and crosses as instances
  <Instances position={[0, 0, 0]}>
    <planeGeometry args={[lineWidth, height]} />
    <meshBasicMaterial color='#999' />
    {/* {Array.from({ length: number }, (_, y) =>
      Array.from({ length: number }, (_, x) => (
        <group
          key={x + ':' + y}
          position={[
            x * 2 - Math.floor(number / 2) * 2,
            -0.01,
            y * 2 - Math.floor(number / 2) * 2,
          ]}
        >
          <Instance rotation={[-Math.PI / 2, 0, 0]} />
          <Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        </group>
      )),
    )} */}
    <gridHelper args={[150, 150, '#eee', '#eee']} position={[0, -0.01, 0]} />
  </Instances>
)

function Text({
  children,
  config,
  font = '/Inter_Medium_Regular.json',
  ...props
}: {
  children: React.ReactNode
  config: any
  font: string
  position?: number[]
  scale?: number
}) {
  const texture = useLoader(
    RGBELoader,
    'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr',
  )
  return (
    <>
      <group>
        <Center scale={[0.8, 1, 1]} front top {...props}>
          <Text3D
            castShadow
            bevelEnabled
            font={font}
            scale={5}
            letterSpacing={-0.03}
            height={0.25}
            bevelSize={0.01}
            bevelSegments={10}
            curveSegments={128}
            bevelThickness={0.01}
          >
            {children}
            <MeshTransmissionMaterial {...config} background={texture} />
          </Text3D>
        </Center>
      </group>
    </>
  )
}

export default MainApp
