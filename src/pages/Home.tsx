import React from 'react';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import { DataTable } from '../components/DataTable';

export const Home = () => {
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
      <DataTable />
    </Container>
  );
};
