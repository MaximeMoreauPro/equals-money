import React from 'react';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { Contact } from '@/model/entities/Contact';
import { InMemoryContactRepository } from '@/infra/repositories/InMemoryContact.repository';
import { contactsRoutes } from '@/app/pages/contacts/routes';
import { JaneDoeContact, JohnDoeContact } from '@/__test__/Contact.mock-data';

describe('Container: ContactsList', () => {
  it('should display the contact cards list from the list of available contacts', async () => {
    renderContactsList({
      contacts: [JohnDoeContact, JaneDoeContact],
    });

    // expect(await screen.findByText('Loading...')).toBeInTheDocument();

    const contactCards = await screen.findAllByTestId('contact-card');
    expect(contactCards).toHaveLength(2);
    expect(contactCards[0]).toHaveTextContent('John Doe');
    expect(contactCards[1]).toHaveTextContent('Jane Doe');
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
