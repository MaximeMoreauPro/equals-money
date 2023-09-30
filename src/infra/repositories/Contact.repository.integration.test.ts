import { Contact } from '@/model/entities/Contact';
import { ContactRepository } from '@/model/repositories/Contact.repository';

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
        initialContacts: [
          {
            name: 'John Doe',
            avatar: 'https://example.com/john-doe.png',
            createdAt: '2020-01-01T00:00:00.000Z',
            email: 'johndoe@test.com',
            phone: '+1 234 567 890',
            birthday: '1990-01-01',
          },
          {
            name: 'Jane Doe',
            avatar: 'https://example.com/jane-doe.png',
            createdAt: '2020-01-01T00:00:00.000Z',
            email: 'janedoe@test.com',
            phone: '+1 234 567 891',
            birthday: '1992-03-04',
          },
        ],
      });
      const contacts = await contactRepository.findAllMinimalDetailsContacts();

      expect(contacts).toStrictEqual([
        {
          name: 'John Doe',
          avatar: 'https://example.com/john-doe.png',
        },
        {
          name: 'Jane Doe',
          avatar: 'https://example.com/jane-doe.png',
        },
      ]);
    });
  });
}
