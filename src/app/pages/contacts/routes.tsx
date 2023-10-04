import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ContactsList = lazy(() => import('./containers/ContactsList'));
const ContactDetails = lazy(() => import('./containers/ContactDetails'));

const CONTACTS_BASE_ROUTE = 'contacts';
const CONTACT_DETAILS_ROUTE = `${CONTACTS_BASE_ROUTE}/:contactName`;

export const contactsRoutes: RouteObject[] = [
  {
    path: CONTACTS_BASE_ROUTE,
    element: <ContactsList />,
  },
  {
    path: CONTACT_DETAILS_ROUTE,
    element: <ContactDetails />,
  },
];
