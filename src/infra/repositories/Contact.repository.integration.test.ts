import { Contact } from '@/model/entities/Contact';
import { ContactRepository } from '@/model/repositories/Contact.repository';
import {
  JaneDoeContact,
  JohnDoeContact,
} from '@/model/entities/Contact.mock-data';

import { InMemoryContactRepository } from './InMemoryContact.repository';

describe('ContactRepository', () => {
  runContactRepositoryIntegrationTests(
    'InMemoryContactRepository',
    () => new InMemoryContactRepository(),
    ({ contactRepository, initialContacts }) => {
      (contactRepository as InMemoryContactRepository).initAvailableContacts(
        initialContacts,
      );
    },
  );
});

function runContactRepositoryIntegrationTests(
  contactRepositoryImplementation:
    | 'InMemoryContactRepository'
    | 'API_ContactRepository',
  contactRepositoryFactory: () => ContactRepository,
  contactRepositoryInit: ({
    contactRepository,
    initialContacts,
  }: {
    contactRepository: ContactRepository;
    initialContacts: Contact[];
  }) => void,
) {
  describe(contactRepositoryImplementation, () => {
    let contactRepository: ContactRepository;

    beforeEach(async () => {
      contactRepository = contactRepositoryFactory();
    });

    it('should find none contact if it has not been initialised', async () => {
      const contacts = await contactRepository.findAllMinimalDetailsContacts();

      expect(contacts).toStrictEqual([]);
    });

    it('should find all minimal details contacts', async () => {
      contactRepositoryInit({
        contactRepository,
        initialContacts: [JohnDoeContact, JaneDoeContact],
      });
      const contacts = await contactRepository.findAllMinimalDetailsContacts();

      expect(contacts).toStrictEqual([
        {
          name: JohnDoeContact.name,
          avatar: JohnDoeContact.avatar,
        },
        {
          name: JaneDoeContact.name,
          avatar: JaneDoeContact.avatar,
        },
      ]);
    });
  });
}
