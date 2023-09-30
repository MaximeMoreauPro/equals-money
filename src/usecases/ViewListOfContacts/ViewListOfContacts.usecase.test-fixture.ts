import { Contact } from '@/entities/Contact';

import { MinimalDetailsContact } from './MinimalDetailsContact';

export function createFixture() {
  let availableContacts: Contact[] = [];
  let displayedListOfContacts: MinimalDetailsContact[] = [];

  return {
    givenTheseContactsExist(contacts: Contact[]) {
      availableContacts = contacts;
    },
    whenUserViewsTheListOfContacts() {
      displayedListOfContacts = availableContacts.map(contact => ({
        name: contact.name,
        avatar: contact.avatar,
      }));
    },
    thenTheDisplayedListOfContactsIs(
      expectedListOfContacts: MinimalDetailsContact[],
    ) {
      expect(displayedListOfContacts).toEqual(expectedListOfContacts);
    },
  };
}
