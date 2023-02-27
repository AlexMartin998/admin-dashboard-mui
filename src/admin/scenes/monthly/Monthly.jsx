import { Box, useTheme } from '@mui/material';
import { useMemo } from 'react';

import { Loader } from '../../../shared';
import { useGetSalesQuery } from '../../../store';
import { Header } from '../../shared';
import MonthlyLine from './../../shared/components/DailyOrMonthlyLine';

const Monthly = () => {
  const { data, isLoading } = useGetSalesQuery();
  const theme = useTheme();

  const [formattedData] = useMemo(() => {
    if (!data) return [];

    const { monthlyData } = data;
    const totalSalesLine = {
      id: 'totalSales',
      color: theme.palette.secondary.main,
      data: [],
    };
    const totalUnitsLine = {
      id: 'totalUnits',
      color: theme.palette.secondary[600],
      data: [],
    };

    Object.values(monthlyData).forEach(({ month, totalSales, totalUnits }) => {
      totalSalesLine.data = [
        ...totalSalesLine.data,
        { x: month, y: totalSales },
      ];
      totalUnitsLine.data = [
        ...totalUnitsLine.data,
        { x: month, y: totalUnits },
      ];
    });

    const formattedData = [totalSalesLine, totalUnitsLine];
    return [formattedData];
  }, [data]);

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="MONTHLY SALES" subtitle="Chart of monthly sales" />

      <Box height="75vh">
        {data && !isLoading ? (
          <MonthlyLine formattedData={formattedData} theme={theme} />
        ) : (
          <Loader />
        )}
      </Box>
    </Box>
  );
};

export default Monthly;
