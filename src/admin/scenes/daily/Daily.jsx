import { Box, useTheme } from '@mui/material';
import { useMemo, useState } from 'react';

import { Loader } from '../../../shared';
import { useGetSalesQuery } from '../../../store';
import { Header } from '../../shared';
import DailyLine from './DailyLine';
import DateRange from './DateRange';

const Daily = () => {
  const [startDate, setStartDate] = useState(new Date('2021-02-01'));
  const [endDate, setEndDate] = useState(new Date('2021-03-01'));
  const { data, isLoading } = useGetSalesQuery();
  const theme = useTheme();

  const [formattedData] = useMemo(() => {
    if (!data) return [];

    const { dailyData } = data;
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

    Object.values(dailyData).forEach(({ date, totalSales, totalUnits }) => {
      const dateFormatted = new Date(date);
      if (dateFormatted >= startDate && dateFormatted <= endDate) {
        const splitDate = date.substring(date.indexOf('-') + 1);

        totalSalesLine.data = [
          ...totalSalesLine.data,
          { x: splitDate, y: totalSales },
        ];
        totalUnitsLine.data = [
          ...totalUnitsLine.data,
          { x: splitDate, y: totalUnits },
        ];
      }
    });

    const formattedData = [totalSalesLine, totalUnitsLine];
    return [formattedData]; // display 2 lines at once
  }, [data, startDate, endDate]);

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="DAILY SALES" subtitle="Chart of daily sales" />

      <Box height="75vh">
        <Box display="flex" justifyContent="flex-end">
          <DateRange {...{ startDate, endDate, setStartDate, setEndDate }} />
        </Box>

        {data && !isLoading ? (
          <DailyLine formattedData={formattedData} theme={theme} />
        ) : (
          <Loader />
        )}
      </Box>
    </Box>
  );
};

export default Daily;
