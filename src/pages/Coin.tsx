import { Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getCoinInfo } from '../services/coinDbApi';
import { useParams } from 'react-router-dom';

export const Coin = () => {
  const [coin, setCoin] = useState<any>(null);

  const { coinCode } = useParams();

  useEffect(() => {
    getCoinInfo(coinCode).then(setCoin);
  }, [coinCode]);

  return (
    <Container
      component="main"
      sx={{
        paddingTop: 2,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'center',
      }}
    >
      <Typography component="h1" paddingBottom={3} fontSize={40} margin="0 auto">
        Cryptocurrency Prices Live
      </Typography>
      {coin && (
        <Typography component="h1" paddingBottom={3} fontSize={40} margin="0 auto">
          {coin.code}
        </Typography>
      )}
    </Container>
  );
};
