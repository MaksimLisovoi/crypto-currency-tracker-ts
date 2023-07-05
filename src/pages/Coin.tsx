import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getCoinInfo } from '../services/coinDbApi';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import { CoinPricesBlock } from '../components/CoinPage/CoinPricesBlock';
import moment from 'moment';
import { ChartBlock } from '../components/CoinPage/ChartBlock.tsx';

export const Coin = () => {
  const { coinCode } = useParams();

  return (
    <Box component="main" minHeight={'100vh'}>
      <Typography
        component="h1"
        paddingBottom={3}
        fontSize={26}
        margin="0 auto"
        textAlign={'center'}
      >
        {`${coinCode} Price`}
      </Typography>
      <CoinPricesBlock />
      <ChartBlock />
    </Box>
  );
};
