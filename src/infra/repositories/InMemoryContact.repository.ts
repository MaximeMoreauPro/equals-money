import { Contact } from '@/model/entities/Contact';
import { ContactRepository } from '@/model/repositories/Contact.repository';

import { MinimalDetailsContact } from '@/usecases/ViewListOfContacts/MinimalDetailsContact';

/**
 * In-memory implementation of the ContactRepository interface for testing purposes.
 * the contacts are initialized with the initAvailableContacts method and saved in the contacts array attribute.
 */
export class InMemoryContactRepository implements ContactRepository {
  private contacts: Contact[] = [];

  async findAllMinimalDetailsContacts(): Promise<MinimalDetailsContact[]> {
    return Promise.resolve(
      this.contacts.map(contact => ({
        name: contact.name,
        avatar: contact.avatar,
      })),
    );
  }

  initAvailableContacts(contacts: Contact[]) {
    this.contacts = contacts;
  }
}
