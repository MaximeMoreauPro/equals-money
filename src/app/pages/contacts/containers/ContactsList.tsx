import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useViewListOfContacts } from './useViewListOfContacts';

export default function ContactsList() {
  const { isContactsLoading, contacts } = useViewListOfContacts();

  const navigate = useNavigate();

  if (isContactsLoading) {
    return <div>Loading...</div>;
  }

  if (contacts.length) {
    return (
      <ul>
        {contacts.map(contact => (
          <li
            key={contact.name}
            onClick={() => navigate(contact.name)}
            data-testid="contact-card"
          >
            {contact.name}
          </li>
        ))}
      </ul>
    );
  }

  return <div>No contacts available</div>;
}
