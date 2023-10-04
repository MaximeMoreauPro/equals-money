import { Contact } from '@/model/entities/Contact';

import { InMemoryContactRepository } from '@/infra/repositories/InMemoryContact.repository';
import { MinimalDetailsContact } from '@/model/repositories/Contact.repository';

import { ViewListOfContactsUseCase } from './ViewListOfContacts.usecase';

export function createFixture() {
  let displayedListOfContacts: MinimalDetailsContact[];

  const contactsRepository = new InMemoryContactRepository();
  const viewListOfContactsUseCase = new ViewListOfContactsUseCase(
    contactsRepository,
  );

  return {
    givenTheseContactsExist(contacts: Contact[]) {
      contactsRepository.initAvailableContacts(contacts);
    },
    async whenUserViewsTheListOfContacts() {
      displayedListOfContacts = await viewListOfContactsUseCase.handle();
    },
    // Stryker disable all
    thenTheDisplayedListOfContactsIs(
      expectedListOfContacts: MinimalDetailsContact[],
    ) {
      expect(displayedListOfContacts).toStrictEqual(expectedListOfContacts);
    },
    // Stryker restore all
  };
}
