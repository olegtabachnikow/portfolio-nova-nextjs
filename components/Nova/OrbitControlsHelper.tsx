import { FC, useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { setIsCameraMoving } from '@/redux/nova-slice';

export const OrbitControlsHelper: FC = () => {
  const position = useSelector((state: RootState) => state.nova.position);
  const isMoving = useSelector((state: RootState) => state.nova.isMoving);
  const dispatch = useDispatch();
  const controlsRef = useRef<any>();
  const { camera } = useThree();
  camera.manual = false;

  const updateCameraPosition = () => {
    dispatch(setIsCameraMoving(true));
    const targetPosition = new THREE.Vector3(
      position.x,
      position.y,
      position.z
    );
    const startPosition = camera.position.clone();

    let t = 0;
    const duration = 0.2;

    const moveCamera = () => {
      t += 1 / 60;
      const progress = Math.min(t / duration, 1);
      const newPosition = new THREE.Vector3().lerpVectors(
        startPosition,
        targetPosition,
        progress
      );

      camera.position.copy(newPosition);
      if (progress < 1) {
        requestAnimationFrame(moveCamera);
      } else {
        dispatch(setIsCameraMoving(false));
      }
    };

    requestAnimationFrame(moveCamera);
  };

  useFrame(() => {
    if (isMoving) {
      updateCameraPosition();
    }
  });
  return (
    <OrbitControls
      autoRotate={true}
      ref={controlsRef}
      enabled={true}
      enableZoom={false}
      enableRotate={false}
      enablePan={false}
      autoRotateSpeed={0.2}
    />
  );
};
