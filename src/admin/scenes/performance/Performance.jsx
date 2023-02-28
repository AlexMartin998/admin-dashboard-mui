import { useMemo } from 'react';
import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { columnsStructure } from './columns';
import { DataGridCustomColumnMenu, Header } from '../../shared';
import { useGetUserPerformanceQuery } from '../../../store';
import { useUiStore } from '../../../hooks';

const Performance = () => {
  // TODO: auth
  const { userId } = useUiStore();
  const { data, isLoading } = useGetUserPerformanceQuery(userId);
  const theme = useTheme();
  const columns = useMemo(() => columnsStructure, []);

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="PERFORMANCE"
        subtitle="Track your Affiliate Sales Performance Here"
      />

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
          getRowId={row => row._id}
          rows={(data && data.sales) || []}
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

export default Performance;
