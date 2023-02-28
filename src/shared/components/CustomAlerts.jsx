import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import { useAuthStore } from '../../hooks';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6}  ref={ref} variant="filled" {...props} />;
});

const CustomAlerts = () => {
  const { errorMessage } = useAuthStore();

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={errorMessage?.length >= 1}>
        <Alert severity="error" sx={{ width: '100%' }}>
          {errorMessage?.[0]}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default CustomAlerts;
