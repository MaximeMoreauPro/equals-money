import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default App;
