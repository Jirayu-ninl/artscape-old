import { useLoader } from '@react-three/fiber'
import { SVGLoader } from 'three-stdlib'
import { Center, MeshTransmissionMaterial } from '@react-three/drei'
import { RGBELoader } from 'three-stdlib'

const ExtrudedSVG = ({
  url,
  ...props
}: {
  url: string
  position?: number[]
  scale?: number
}) => {
  const svg = useLoader(SVGLoader, url)
  const shapes = svg.paths.flatMap((path) => path.toShapes(true))

  const extrudeSettings = {
    depth: 0.5,
    bevelEnabled: true,
    bevelThickness: 0.2,
    bevelSegments: 10,
  }

  const texture = useLoader(
    RGBELoader,
    'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr',
  )

  const config = {
    backside: true,
    backsideThickness: 0.3,
    samples: 16,
    resolution: 512,
    transmission: 0.5,
    clearcoat: 0.23,
    clearcoatRoughness: 0.42,
    thickness: 0.8,
    chromaticAberration: 3.25,
    anisotropy: 2,
    // roughness: 0.45,
    roughness: 0.5,
    distortion: 3.08,
    distortionScale: 0.3,
    temporalDistortion: 0.08,
    ior: 1.5,
    color: '#07ebb5',
    // color: '#43f7cd',
    gColor: '#07afeb',
  }

  return (
    <group {...props}>
      <Center front top>
        {shapes.map((shape, index) => (
          <mesh
            key={index}
            position={[0, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            castShadow
            // scale={0.003}
          >
            <extrudeGeometry
              args={[shape, extrudeSettings]}
              attach='geometry'
            />
            {/* <meshBasicMaterial attach='material' color='red' /> */}
            <MeshTransmissionMaterial
              {...config}
              background={texture}
              attach='material'
            />
          </mesh>
        ))}
      </Center>
    </group>
  )
}

export default ExtrudedSVG
