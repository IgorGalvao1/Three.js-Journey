import { useThree, useFrame } from '@react-three/fiber'
import { Stage, Lightformer, Environment, Sky, ContactShadows, RandomizedLight, AccumulativeShadows, SoftShadows, BakeShadows, useHelper, OrbitControls } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'
import { useControls } from 'leva'

export default function Experience()
{
    const directionalLight = useRef()
    useHelper(directionalLight, THREE.DirectionalLightHelper, 1)

    const cube = useRef()
    
    useFrame((state, delta) =>
    {
        // const time = state.clock.elapsedTime
        // cube.current.position.x = 2 + Math.sin(time)
        cube.current.rotation.y += delta * 0.2
    })

    const { color, opacity, blur } = useControls('contact shadows', {
        color: '#000000',
        opacity: { value: 0.4, min: 0, max: 1 },
        blur: { value: 2.8, min: 0, max: 10 }
    })

    const { sunPosition } = useControls('sky', {
        sunPosition: {value: [1, 2, 3]}
    })

    const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } = useControls('environment map', {
        envMapIntensity: { value: 1, min: 0, max: 12 },
        envMapHeight: {value: 7, min: 0, max: 100},
        envMapRadius: {value: 20, min: 10, max: 100},
        envMapScale: {value: 100, min: 10, max: 100},
    })

    // const scene = useThree(state => state.scene)
    // useEffect(() =>
    // {
    //     scene.environmentIntensity = envMapIntensity
    // }, [ envMapIntensity ])

    return <>

        {/* <Environment
            background
            preset="sunset"
            ground={{
                height: envMapHeight,
                radius: envMapRadius,
                scale: envMapScale
            }}
            // files={'./environmentMaps/the_sky_is_on_fire_2k.hdr'}
        > */}
            {/* <color args={['#000000']} attach="background" /> */}
            {/* <Lightformer
                position-z={-5}
                scale={10}
                color="red"
                intensity={10}
                form="ring"
            /> */}
            {/* <mesh position-z={- 5} scale={10}>
                <planeGeometry />
                <meshBasicMaterial color={[10, 0, 0]} />
            </mesh> */}
        {/* </Environment> */}


        {/* <BakeShadows /> */}
        {/* <SoftShadows size={ 25 } samples={ 10 } focus={ 0 } /> */}

        {/* <color args={ ['ivory' ] } attach="background" /> */}

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        {/* <AccumulativeShadows
            position={[0, -0.99, 0]}
            scale={10}
            color="#316d39"
            opacity={0.8}
            frames={Infinity}
            temporal
            blend={100}
        >
            <RandomizedLight
                amount={ 8 }
                radius={ 1 }
                ambient={ 0.5 }
                intensity={ 3 }
                position={ [ 1, 2, 3 ] }
                bias={ 0.001 }
            />
        </AccumulativeShadows> */}

        {/* <ContactShadows
            position={[0, 0, 0]}
            scale={10}
            resolution={512}
            far={5}
            color={color}
            opacity={opacity}
            blur={blur}
        /> */}

        {/* <directionalLight
            ref={directionalLight}
            position={sunPosition}
            intensity={4.5}
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-camera-near={ 1 }
            shadow-camera-far={ 10 }
            shadow-camera-top={ 5 }
            shadow-camera-right={ 5 }
            shadow-camera-bottom={ - 5 }
            shadow-camera-left={ - 5 }
        /> */}
        {/* <ambientLight intensity={1.5} /> */}
        
        {/* <Sky sunPosition={sunPosition} /> */}

        {/* <mesh castShadow position-y={1} position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh> */}

        {/* <mesh castShadow ref={ cube } position-y={1} position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh> */}

        {/* <mesh position-y={ 0 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh> */}

        <Stage
            shadows={ {
                type: 'contact',
                opacity: 0.8,
                blur: 3
            }}
            environment="sunset"
            preset="portrait"
            intensity={envMapIntensity}
        >
            <mesh castShadow position-y={1} position-x={ - 2 }>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>

            <mesh castShadow ref={ cube } position-y={1} position-x={ 2 } scale={ 1.5 }>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>
        </Stage>
    </>
}