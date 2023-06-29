import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from '../../pages/Home';
import { Layout } from '../Layout';
import { Coin } from '../../pages/Coin';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="coins/:coinCode" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
};
