import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, useMediaQuery } from '@mui/material';

import { Navbar, Sidebar } from '../shared';
import { useGetUserQuery } from '../../store';
import { useUiStore } from '../../hooks';

const AdminLayout = () => {
  const isNonMobile = useMediaQuery('(min-width: 600px)');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // TODO: get user from db  <--  AUTH
  const { userId } = useUiStore();
  const { data } = useGetUserQuery(userId);

  return (
    <Box display={isNonMobile ? 'flex' : 'block'} width="100%" height="100%">
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
