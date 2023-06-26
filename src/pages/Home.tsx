import React from 'react';
import { Container } from '@mui/system';
import { DataTable } from '../components/DataTable';

export const Home = () => {
  return (
    <Container
      component="main"
      sx={{ paddingTop: 8, display: 'flex', minHeight: '100vh', justifyContent: 'center' }}
    >
      <DataTable />
    </Container>
  );
};
