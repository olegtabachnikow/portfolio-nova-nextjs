import { useRef, FC, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import { useDispatch, useSelector } from 'react-redux';
import { setIsStarted } from '@/redux/interface-slice';
import { RootState } from '@/redux/store';

const variants = {
  active: { scaleX: 1, scaleY: 1, scaleZ: 1, opacity: 1 },
  pending: { scaleX: 0, scaleY: 0, scaleZ: 0, opacity: 0 },
};

const sizes: number[] = [];
const shift: number[] = [];

const pushShift = () => {
  shift.push(
    Math.random() * Math.PI,
    Math.random() * Math.PI * 2,
    (Math.random() * 0.9 + 0.1) * Math.PI * 0.1,
    Math.random() * 0.9 + 0.1
  );
};

THREE.ColorManagement.enabled = true;

//@ts-ignore
const pts = new Array(50000).fill().map(() => {
  sizes.push(Math.random() * 1.5 + 0.5);
  pushShift();
  return new THREE.Vector3()
    .randomDirection()
    .multiplyScalar(Math.random() * 0.5 + 9.5);
});

for (let i = 0; i < 100000; i++) {
  const r = 10,
    R = 40;
  const rand = Math.pow(Math.random(), 1.5);
  const radius = Math.sqrt(R * R * rand + (1 - rand) * r * r);
  pts.push(
    new THREE.Vector3().setFromCylindricalCoords(
      radius,
      Math.random() * 2 * Math.PI,
      (Math.random() - 0.5) * 2
    )
  );
  sizes.push(Math.random() * 1.5 + 0.5);
  pushShift();
}

const geometry = new THREE.BufferGeometry().setFromPoints(pts);
geometry.setAttribute('sizes', new THREE.Float32BufferAttribute(sizes, 1));
geometry.setAttribute('shift', new THREE.Float32BufferAttribute(shift, 4));

const elapsedTime = {
  time: { value: 0 },
};

export const Stars: FC = () => {
  const stars = useRef<any>();
  const dispatch = useDispatch();
  const isStarted = useSelector(
    (state: RootState) => state.interface.isStarted
  );

  useEffect(() => {
    dispatch(setIsStarted(true));
  }, []);

  const onBeforeCompile = (shader: any) => {
    shader.uniforms.time = elapsedTime.time;
    shader.vertexShader = `
      uniform float time;
      attribute float sizes;
      attribute vec4 shift;
      varying vec3 vColor;
      ${shader.vertexShader}
    `
      .replace(`gl_PointSize = size;`, `gl_PointSize = size * sizes;`)
      .replace(
        `#include <color_vertex>`,
        `#include <color_vertex>
        float d = length(abs(position) / vec3(40., 10., 40));
        d = clamp(d, 0., 1.);
        vColor = mix(vec3(227., 155., 0.), vec3(100., 50., 255.), d) / 255.;
      `
      )
      .replace(
        `#include <begin_vertex>`,
        `#include <begin_vertex>
        float t = time;
        float moveT = mod(shift.x + shift.z * t, PI2);
        float moveS = mod(shift.y + shift.z * t, PI2);
        transformed += vec3(cos(moveS) * sin(moveT), cos(moveT), sin(moveS) * sin(moveT)) * shift.w;
      `
      );
    shader.fragmentShader = `
      varying vec3 vColor;
      ${shader.fragmentShader}
    `
      .replace(
        `#include <clipping_planes_fragment>`,
        `#include <clipping_planes_fragment>
        float d = length(gl_PointCoord.xy - 0.5);
        //if (d > 0.5) discard;
      `
      )
      .replace(
        `vec4 diffuseColor = vec4( diffuse, opacity );`,
        `vec4 diffuseColor = vec4( vColor, smoothstep(0.5, 0.1, d)/* * 0.5 + 0.5*/ );`
      );
  };

  useFrame((state) => {
    if (stars.current) {
      elapsedTime.time.value = state.clock.getElapsedTime();
    }
  });

  return (
    <motion.points
      ref={stars}
      initial={{ scale: isStarted ? 1 : 0, opacity: isStarted ? 1 : 0 }}
      animate={isStarted ? variants.active : variants.pending}
      transition={{ duration: 0.7, ease: 'anticipate' }}
    >
      <bufferGeometry attach='geometry' {...geometry} />
      <pointsMaterial
        size={0.155}
        transparent={true}
        depthTest={false}
        blending={THREE.AdditiveBlending}
        onBeforeCompile={onBeforeCompile}
      />
    </motion.points>
  );
};
