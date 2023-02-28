import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  const isNonMobile = useMediaQuery('(min-width: 600px)');

  return (
    <Box display={isNonMobile ? 'flex' : 'block'} width="100%" height="100%">
      <Outlet />
    </Box>
  );
};

export default PublicLayout;
