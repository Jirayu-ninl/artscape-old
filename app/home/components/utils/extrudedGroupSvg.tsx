import { SVGLoader } from 'three-stdlib'
import { useLoader } from '@react-three/fiber'
import { Shape } from 'three'

interface ExtrudedSVGProps {
  url: string
}

interface SVGLoaderData {
  scene: SVGLoaderGroup
}

interface SVGLoaderGroup {
  isGroup: boolean
  children: SVGLoaderPath[]
}

interface SVGLoaderPath {
  isPath: boolean
  path: string
  d: string
}

const extractShapesFromGroup = (group: SVGLoaderGroup): Shape[] => {
  const shapes: Shape[] = []

  group.children.forEach((child: SVGLoaderPath | SVGLoaderGroup) => {
    if (child.isGroup) {
      shapes.push(...extractShapesFromGroup(child as SVGLoaderGroup))
    } else if (child.isPath) {
      const shape = new Shape().fromPath(child.path)
      shapes.push(shape)
    }
  })

  return shapes
}

const ExtrudedSVG: React.FC<ExtrudedSVGProps> = ({ url }) => {
  const svg: SVGLoaderData = useLoader(SVGLoader, url)
  const shapes = extractShapesFromGroup(svg.scene)

  const extrudeSettings = {
    depth: 10,
    bevelEnabled: false,
  }

  return (
    <group>
      {shapes.map((shape, index) => (
        <mesh key={index} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <extrudeGeometry args={[shape, extrudeSettings]} attach='geometry' />
          <meshBasicMaterial attach='material' color='red' />
        </mesh>
      ))}
    </group>
  )
}

export default ExtrudedSVG
