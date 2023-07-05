import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar';

// import { Container } from './Layout.styled';
import { Footer } from '../Footer';
import { Toaster } from 'react-hot-toast';
import { Container } from '@mui/system';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Container
        sx={{
          minHeight: '100vh',
        }}
      >
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Footer />
      </Container>
      <Toaster />
    </>
  );
};
