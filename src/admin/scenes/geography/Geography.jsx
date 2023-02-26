import { Box, useTheme } from '@mui/material';

import { Header } from '../../shared';
import { useGetGeographyQuery } from '../../../store';
import { geoData } from '../../../store';
import { Loader } from '../../../shared';
import Choropleth from './Choropleth';

const Geography = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetGeographyQuery();

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="GEOGRAPHY" subtitle="Find where your users are located." />

      <Box
        mt="40px"
        height="75vh"
        border={`1px solid ${theme.palette.secondary[200]}`}
        borderRadius="4px"
      >
        {(data && !isLoading && (
          <Choropleth data={data} features={geoData.features} theme={theme} />
        )) || <Loader />}
      </Box>
    </Box>
  );
};

export default Geography;
