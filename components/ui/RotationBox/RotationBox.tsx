import { FC } from 'react';
import useMouseRotation from '@/hooks/useMouseRotation';

interface Props {
  children: React.ReactNode;
}

const RotationBox: FC<Props> = ({ children }) => {
  const { rotation, handleMouseMove } = useMouseRotation();
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
      }}
      onMouseMove={handleMouseMove}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: `rotateY(${rotation.y}deg) rotateX(${rotation.x}deg)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default RotationBox;
