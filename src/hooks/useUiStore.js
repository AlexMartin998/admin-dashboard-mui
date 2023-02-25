import { useDispatch, useSelector } from 'react-redux';
import { onSetMode } from '../store';

export const useUiStore = () => {
  const dispatch = useDispatch();

  const { mode } = useSelector(state => state.ui);

  const setMode = () => {
    dispatch(onSetMode());
  };

  return {
    // Properties
    mode,

    // Methods
    setMode,
  };
};
