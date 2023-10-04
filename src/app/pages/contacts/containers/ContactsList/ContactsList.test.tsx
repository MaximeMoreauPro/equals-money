import React from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Contact } from '@/model/entities/Contact';
import { InMemoryContactRepository } from '@/infra/repositories/InMemoryContact.repository';
import { contactsRoutes } from '@/app/pages/contacts/routes';
import {
  JaneDoeContact,
  JohnDoeContact,
} from '@/model/entities/Contact.mock-data';
import { ContactRepositoryContext } from '@/app/contexts/ContactRepositoryContext';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

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

  it('should navigate to the contact detail page on card click', async () => {
    const availableContacts = [JohnDoeContact];

    renderContactsList({
      availableContacts,
    });

    const contactCards = await screen.findAllByTestId('contact-card');
    await user.click(contactCards[0]);
    expect(mockedUseNavigate).toHaveBeenCalledWith(JohnDoeContact.name);
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
