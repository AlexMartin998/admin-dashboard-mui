import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar } from '../shared';

const AdminLayout = () => {
  return (
    <Box width="100%" height="100%">
      <Box>
        <Navbar />

        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
