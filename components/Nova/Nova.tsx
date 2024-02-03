import { FC } from 'react';
import classes from './Nova.module.css';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { AdaptiveDpr } from '@react-three/drei';
import { Stars } from './Stars';
import { OrbitControlsHelper } from './OrbitControlsHelper';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface Props {
  isAboutPage?: boolean;
}

export const Nova: FC<Props> = ({ isAboutPage }) => {
  const cameraPosition = useSelector((state: RootState) => state.nova.position);
  const opacity = useSelector((state: RootState) => state.interface.opacity);
  const cameraSettings: any = {
    fov: 45,
    near: 0.1,
    far: 100,
    position: [cameraPosition.x, cameraPosition.y, cameraPosition.z],
  };
  return (
    <div className={classes.nova} style={{ opacity: opacity }}>
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
        <OrbitControlsHelper isAboutPage={isAboutPage} />
      </Canvas>
    </div>
  );
};
