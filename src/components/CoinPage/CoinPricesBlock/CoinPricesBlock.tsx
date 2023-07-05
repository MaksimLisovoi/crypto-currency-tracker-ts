import { Box } from '@mui/system';

import { NameBlock } from './NameBlock';
import { useEffect, useState } from 'react';
import { getCoinInfo } from '../../../services/coinDbApi';

import { PercentBlock } from './PercentBlock';
import { useParams } from 'react-router-dom';
import { Loader } from '../../Loader/Loader';

export const CoinPricesBlock = () => {
  interface IcoinData {
    isLoading: boolean;
    coin: any;
  }

  const { coinCode } = useParams();
  const [coinState, setCoinState] = useState<IcoinData>({
    isLoading: false,
    coin: null,
  });

  const { coin, isLoading } = coinState;

  useEffect(() => {
    setCoinState(prevState => ({ ...prevState, isLoading: true }));
    getCoinInfo(coinCode).then(data =>
      setCoinState(prevState => ({ ...prevState, coin: data, isLoading: false })),
    );
  }, [coinCode]);

  const obj = {};

  console.log(!!coin);

  // if (!coin) {
  //   return;
  // }

  return (
    // <></>
    coin && (
      <Box
        sx={{
          backgroundColor: 'primary.tableBg',
          mt: 2,
          p: 2,
          boxShadow: 2,
          borderRadius: 2,
          height: 240,
        }}
      >
        {isLoading ? (
          <Loader height="240px" />
        ) : (
          <>
            <NameBlock coin={coin} coinCode={coinCode} />
            <PercentBlock coin={coin} />
          </>
        )}
      </Box>
    )
  );
};
