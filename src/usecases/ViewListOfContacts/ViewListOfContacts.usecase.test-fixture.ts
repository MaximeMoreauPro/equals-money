import { Contact } from '@/model/entities/Contact';

import { MinimalDetailsContact } from './MinimalDetailsContact';
import { ViewListOfContactsUseCase } from './ViewListOfContacts.usecase';
import { InMemoryContactRepository } from '@/infra/repositories/InMemoryContact.repository';

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
    thenTheDisplayedListOfContactsIs(
      expectedListOfContacts: MinimalDetailsContact[],
    ) {
      expect(displayedListOfContacts).toStrictEqual(expectedListOfContacts);
    },
  };
}
