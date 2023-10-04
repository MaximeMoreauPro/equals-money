import React from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Contact } from '@/model/entities/Contact';
import { InMemoryContactRepository } from '@/infra/repositories/InMemoryContact.repository';
import { contactsRoutes } from '@/app/pages/contacts/routes';
import {
  JaneDoeContact,
  JohnDoeContact,
} from '@/model/entities/Contact.mock-data';
import { ContactRepositoryContext } from '@/app/contexts/ContactRepositoryContext';

describe('Container: ContactDetails', () => {
  it('should display the details about the contact if it exists', async () => {
    renderContactDetails({
      availableContacts: [JohnDoeContact],
      contactName: JohnDoeContact.name,
    });

    expect(await screen.findByText(`Loading...`)).toBeInTheDocument();

    expect(
      await screen.findByText(`Name: ${JohnDoeContact.name}`),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(`Phone: ${JohnDoeContact.phone}`),
    ).toBeInTheDocument();
  });

  it('should display the no contact found message if the it exists', async () => {
    renderContactDetails({
      availableContacts: [JohnDoeContact],
      contactName: JaneDoeContact.name,
    });

    expect(await screen.findByText(`Loading...`)).toBeInTheDocument();

    expect(
      await screen.findByText(
        `No contact found with name ${JaneDoeContact.name}`,
      ),
    ).toBeInTheDocument();
  });
});

type RenderContactDetailsParams = {
  availableContacts: Contact[];
  contactName: string;
};

function renderContactDetails({
  availableContacts,
  contactName,
}: RenderContactDetailsParams) {
  const contactRepository = new InMemoryContactRepository();
  contactRepository.initAvailableContacts(availableContacts);

  // the contacts module router can also be tested thanks to the MemoryRouter
  const contactsRouter = createMemoryRouter(contactsRoutes, {
    initialEntries: [`/contacts/${contactName}`],
  });

  return render(
    <ContactRepositoryContext.Provider value={contactRepository}>
      <RouterProvider router={contactsRouter} />
    </ContactRepositoryContext.Provider>,
  );
}
