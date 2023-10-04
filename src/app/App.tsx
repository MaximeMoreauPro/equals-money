import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </React.StrictMode>
  );
};

export default App;
