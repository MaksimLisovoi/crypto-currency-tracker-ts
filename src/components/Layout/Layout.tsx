import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar';

import { Container } from './Layout.styled';
import { Footer } from '../Footer';
import { Toaster } from 'react-hot-toast';

export const Layout: React.FC = () => {
  return (
    <>
      <Container>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Footer />
      </Container>
      <Toaster />
    </>
  );
};
