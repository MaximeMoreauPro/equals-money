import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ContactsList = lazy(() => import('./containers/ContactsList'));

export const CONTACTS_BASE_ROUTE = 'contacts';

export const contactsRoutes: RouteObject[] = [
  {
    path: CONTACTS_BASE_ROUTE,
    element: <ContactsList />,
  },
];
