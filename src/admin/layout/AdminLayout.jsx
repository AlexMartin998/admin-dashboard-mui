import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const AdminLayout = () => {
  return (
    <Box width="100%" height="100%">
      <Box>
        {/* NavBar */}

        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
