import { useSelector } from 'react-redux';

export const useUiStore = () => {
  // const dispatch = useDispatch();

  const { mode } = useSelector(state => state.ui);

  return {
    // Properties
    mode,

    // Methods
  };
};
