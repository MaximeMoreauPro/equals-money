import React from 'react';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { Contact } from '@/model/entities/Contact';
import { InMemoryContactRepository } from '@/infra/repositories/InMemoryContact.repository';
import { contactsRoutes } from '@/app/pages/contacts/routes';
import { JaneDoeContact, JohnDoeContact } from '@/__test__/Contact.mock-data';

describe('Container: ContactsList', () => {
  it('should display the contact cards list from the list of available contacts', async () => {
    renderContactsList({
      contacts: [JohnDoeContact, JaneDoeContact],
    });

    const loading = await screen.findByText('Loading...');
    expect(loading).toBeDefined();
  });
});

function renderContactsList({ contacts }: { contacts: Contact[] }) {
  const contactRepository = new InMemoryContactRepository();
  contactRepository.initAvailableContacts(contacts);

  // the contacts scope router can also be tested thanks to the MemoryRouter
  const contactsRouter = createMemoryRouter(contactsRoutes, {
    initialEntries: ['/contacts'],
  });

  return render(<RouterProvider router={contactsRouter} />);
}
