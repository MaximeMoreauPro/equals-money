import React from 'react';
import {
  RouteObject,
  createBrowserRouter,
  createHashRouter,
} from 'react-router-dom';

import { contactsRoutes } from '@/app/pages/contacts/routes';

import { RootLayer } from './RootLayer';

const HOME_ROUTE = '/';

const routes: RouteObject[] = [
  {
    path: HOME_ROUTE,
    element: <RootLayer />,
    errorElement: <div>404</div>,
    children: [...contactsRoutes],
  },
];

/**
 * Some hosting providers as Github Page must use HashRouter because they don't support BrowserRouter
 * HASH_ROUTER env variable can be set to true in the appropriate package.json script (eg. predeploy:gh-pages)
 */
export const router =
  process.env.HASH_ROUTER === 'true'
    ? createHashRouter(routes)
    : createBrowserRouter(routes);
