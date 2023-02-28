import { DownloadOutlined } from '@mui/icons-material';
import { Box, Button } from '@mui/material';

import { FlexBetween } from '../../../shared';
import { Header } from '../../shared';

const DashboardHeader = ({ theme }) => {
  return (
    <FlexBetween>
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

      <Box>
        <Button
          sx={{
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.background.alt,
            fontSize: '14px',
            fontWeight: 'bold',
            padding: '10px 20px',
          }}
        >
          <DownloadOutlined sx={{ mr: '10px' }} />
          Download Reports
        </Button>
      </Box>
    </FlexBetween>
  );
};

export default DashboardHeader;
