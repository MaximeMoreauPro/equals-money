import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useViewListOfContacts } from './useViewListOfContacts';

export function ContactsList() {
  const { isContactsLoading, contacts } = useViewListOfContacts();

  const navigate = useNavigate();

  if (isContactsLoading) {
    return <div>Loading...</div>;
  }

  if (contacts.length) {
    return (
      <ul>
        {contacts.map(({ name }) => (
          <li
            key={name}
            onClick={() => navigate(name)}
            data-testid="contact-card"
          >
            {name}
          </li>
        ))}
      </ul>
    );
  }

  return <div>No contacts available</div>;
}
