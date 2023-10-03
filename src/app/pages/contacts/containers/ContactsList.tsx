import React from 'react';

import { useViewListOfContacts } from './useViewListOfContacts';

export default function ContactsList() {
  const { isContactsLoading, contacts } = useViewListOfContacts();

  if (isContactsLoading) {
    return <div>Loading...</div>;
  }

  if (contacts.length) {
    return (
      <ul>
        {contacts.map(contact => (
          <li data-testid="contact-card" key={contact.name}>
            {contact.name}
          </li>
        ))}
      </ul>
    );
  }

  return <div>No contacts available</div>;
}
