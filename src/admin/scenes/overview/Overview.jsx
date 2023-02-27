import { useState } from 'react';
import { FormControl, MenuItem, InputLabel, Box, Select } from '@mui/material';

import { Header, OverviewChart } from '../../shared';
import { useGetSalesQuery } from '../../../store';
import { Loader } from '../../../shared';

const Overview = () => {
  const [view, setView] = useState('units');
  const { data, isLoading } = useGetSalesQuery();

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="OVERVIEW"
        subtitle={'Overview of general revenue and profit'}
      />

      <Box height="75vh">
        <FormControl sx={{ mt: '1rem' }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="View"
            onChange={e => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>

        {data && !isLoading ? (
          <OverviewChart view={view} data={data} isLoading={isLoading} />
        ) : (
          <Loader />
        )}
      </Box>
    </Box>
  );
};

export default Overview;
