import { Box } from '@mui/system';

import { useParams } from 'react-router-dom';

import { Typography } from '@mui/material';
import { Chart } from './Chart';

export const ChartBlock = () => {
  const { coinCode } = useParams();

  return (
    <Box
      sx={{
        backgroundColor: 'primary.tableBg',
        mt: 2,
        p: 2,
        boxShadow: 2,
        borderRadius: 2,
        width: '100%',
        minHeight: '600px',
      }}
    >
      <Typography component="h2" fontSize={28}>
        {coinCode} Price Chart
      </Typography>
      <Chart coinCode={coinCode} />
    </Box>
  );
};
