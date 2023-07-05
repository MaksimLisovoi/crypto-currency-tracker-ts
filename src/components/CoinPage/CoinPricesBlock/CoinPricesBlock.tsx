import { Box } from '@mui/system';

import { NameBlock } from './NameBlock';
import { useEffect, useState } from 'react';
import { getCoinInfo } from '../../../services/coinDbApi';

import { PercentBlock } from './PercentBlock';
import { useParams } from 'react-router-dom';

export const CoinPricesBlock = () => {
  const { coinCode } = useParams();
  //   const date = coin && coin?.history[0]?.date;
  //   console.log(moment(date));

  //   console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
  //   const dateNow = new Date();
  //   console.log(dateNow);
  //   console.log(dateNow.getTime());

  //   console.log(moment.duration().asWeeks());

  const [coin, setCoin] = useState<any>(null);

  useEffect(() => {
    getCoinInfo(coinCode).then(setCoin);
  }, [coinCode]);

  return (
    coin && (
      <Box
        sx={{
          backgroundColor: 'primary.tableBg',
          mt: 2,
          p: 2,
          boxShadow: 2,
          borderRadius: 2,
        }}
      >
        <NameBlock coin={coin} coinCode={coinCode} />
        <PercentBlock coin={coin} />
      </Box>
    )
  );
};
