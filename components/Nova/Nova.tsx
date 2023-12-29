import { FC } from 'react';
import classes from './Nova.module.css';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { AdaptiveDpr, OrbitControls } from '@react-three/drei';
import { Stars } from './Stars';
import { OrbitControlsHelper } from './OrbitControlsHelper';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const Nova: FC = () => {
  const cameraPosition = useSelector(
    (state: RootState) => state.cameraPosition
  );
  const cameraSettings: any = {
    fov: 45,
    near: 0.1,
    far: 100,
    position: [cameraPosition.x, cameraPosition.y, cameraPosition.z],
  };
  return (
    <div className={classes.nova}>
      <Canvas
        camera={cameraSettings}
        gl={{
          antialias: false,
          toneMapping: THREE.LinearToneMapping,
          outputColorSpace: THREE.LinearSRGBColorSpace,
        }}
      >
        <AdaptiveDpr pixelated />
        <Stars />
        <OrbitControlsHelper />
      </Canvas>
    </div>
  );
};
