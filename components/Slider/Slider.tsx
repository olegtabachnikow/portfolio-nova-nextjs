import { ChangeEvent, FC } from 'react';
import { RootState } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setOpacity } from '@/redux/interface-slice';
import classes from './Slider.module.css';

export const Slider: FC = () => {
  const opacity = useSelector((state: RootState) => state.interface.opacity);
  const dispatch = useDispatch();
  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setOpacity(parseInt(event.target.value) / 100));
  };

  return (
    <input
      className={classes.slider}
      onChange={handleSliderChange}
      value={opacity * 100}
      type='range'
      min={0}
      max={100}
      step={1}
    />
  );
};

export default Slider;
