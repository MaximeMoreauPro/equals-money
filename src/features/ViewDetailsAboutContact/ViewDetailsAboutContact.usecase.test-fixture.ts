import { Contact } from '@/model/entities/Contact';
import { InMemoryContactRepository } from '@/infra/repositories/InMemoryContact.repository';

import { ViewDetailsAboutContactUseCase } from './ViewDetailsAboutContact.usecase';

export function createFixture() {
  let displayedDetailsAboutContact: Contact;
  let displayedNoContactMessage: string;

  const contactsRepository = new InMemoryContactRepository();
  const viewDetailsAboutContactUseCase = new ViewDetailsAboutContactUseCase(
    contactsRepository,
  );

  return {
    givenTheseContactsExist(contacts: Contact[]) {
      contactsRepository.initAvailableContacts(contacts);
    },
    async whenUserViewsTheDetailsAboutContact(contactName: Contact['name']) {
      const result = await viewDetailsAboutContactUseCase.handle({
        contactName,
      });

      if ('contactDetails' in result) {
        displayedDetailsAboutContact = result.contactDetails;
      }

      if ('noContactMessage' in result) {
        displayedNoContactMessage = result.noContactMessage;
      }
    },
    thenTheDisplayedDetailsAboutContactIs(
      expectedListOfContacts: Contact | undefined,
    ) {
      expect(displayedDetailsAboutContact).toStrictEqual(
        expectedListOfContacts,
      );
    },
    thenTheDisplayedNoContactMessageIs(
      expectedNoContactMessage: string | undefined,
    ) {
      expect(displayedNoContactMessage).toStrictEqual(expectedNoContactMessage);
    },
  };
}
