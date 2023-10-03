import React from 'react';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { Contact } from '@/model/entities/Contact';
import { InMemoryContactRepository } from '@/infra/repositories/InMemoryContact.repository';
import { contactsRoutes } from '@/app/pages/contacts/routes';
import { JaneDoeContact, JohnDoeContact } from '@/__test__/Contact.mock-data';
import { ContactRepositoryContext } from '@/app/contexts/ContactRepositoryContext';

describe('Container: ContactsList', () => {
  it('should display the contact cards list from the list of available contacts', async () => {
    const availableContacts = [JohnDoeContact, JaneDoeContact];

    renderContactsList({
      availableContacts,
    });

    expect(await screen.findByText('Loading...')).toBeInTheDocument();

    const contactCards = await screen.findAllByTestId('contact-card');
    expect(contactCards).toHaveLength(availableContacts.length);
    for (let i = 0; i < availableContacts.length; i++) {
      expect(contactCards[i]).toHaveTextContent(availableContacts[i].name);
    }
  });
});

function renderContactsList({
  availableContacts,
}: {
  availableContacts: Contact[];
}) {
  const contactRepository = new InMemoryContactRepository();
  contactRepository.initAvailableContacts(availableContacts);

  // the contacts module router can also be tested thanks to the MemoryRouter
  const contactsRouter = createMemoryRouter(contactsRoutes, {
    initialEntries: ['/contacts'],
  });

  return render(
    <ContactRepositoryContext.Provider value={contactRepository}>
      <RouterProvider router={contactsRouter} />
    </ContactRepositoryContext.Provider>,
  );
}
