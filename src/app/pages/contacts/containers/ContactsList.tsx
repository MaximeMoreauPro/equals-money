import React from 'react';

import { useViewListOfContacts } from '../hooks/useViewListOfContacts';

export default function ContactsList() {
  const { isContactsLoading, contacts } = useViewListOfContacts();

  if (isContactsLoading) {
    return <div>Loading...</div>;
  }

  if (contacts.length) {
    return (
      <ul>
        {contacts.map(contact => (
          <li data-testid="contact-card">{contact.name}</li>
        ))}
      </ul>
    );
  }

  return <div>No contacts available</div>;
}
