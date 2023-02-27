import { useMemo } from 'react';
import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { useGetAdminsQuery } from '../../../store';
import { columnsStructure } from './columns';
import { DataGridCustomColumnMenu, Header } from '../../shared';

const AdminPage = () => {
  const { data, isLoading } = useGetAdminsQuery();
  const columns = useMemo(() => columnsStructure, []);
  const theme = useTheme();

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="ADMINS" subtitle="Managing admins and list of admins" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: theme.palette.primary.light,
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: 'none',
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={row => row.id}
          rows={data || []}
          columns={columns}
          components={{
            ColumnMenu: DataGridCustomColumnMenu,
          }}
          disableSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default AdminPage;
