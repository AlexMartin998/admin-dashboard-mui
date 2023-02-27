import { Box } from '@mui/material';

import { useGetSalesQuery } from '../../../store';
import { BreakdownChart, Header } from '../../shared';
import { Loader } from '../../../shared';

const Breakdown = () => {
  const { data, isLoading } = useGetSalesQuery();

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
      <Box
        mt="40px"
        height="75vh"

        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {data && !isLoading ? <BreakdownChart data={data} /> : <Loader />}
      </Box>
    </Box>
  );
};

export default Breakdown;
