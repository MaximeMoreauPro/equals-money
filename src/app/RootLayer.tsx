import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './Header';

export const RootLayer = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
