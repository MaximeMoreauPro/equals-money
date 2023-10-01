import { Contact } from '@/model/entities/Contact';
import { ContactRepository } from '@/model/repositories/Contact.repository';
import { MinimalDetailsContact } from '@/features/ViewListOfContacts/MinimalDetailsContact';

/**
 * In-memory implementation of the ContactRepository interface for testing purposes.
 * Contacts are initialised with the initAvailableContacts method and saved in the contacts array attribute.
 */
export class InMemoryContactRepository implements ContactRepository {
  private contacts: Contact[] = [];

  async findAllMinimalDetailsContacts(): Promise<MinimalDetailsContact[]> {
    return this.contacts.map(({ name, avatar }) => ({
      name,
      avatar,
    }));
  }

  initAvailableContacts(contacts: Contact[]) {
    this.contacts = contacts;
  }
}
