import { Contact } from '@/model/entities/Contact';
import {
  ContactRepository,
  MinimalDetailsContact,
} from '@/model/repositories/Contact.repository';

/**
 * In-memory implementation of the ContactRepository interface for testing purposes.
 * Contacts are initialised with the initAvailableContacts method and saved in the contacts array attribute.
 */
export class InMemoryContactRepository implements ContactRepository {
  private contacts: Contact[] = [];

  async findDetailsAboutContact(
    contactName: Contact['name'],
  ): Promise<Contact | undefined> {
    return this.contacts.find(({ name }) => name === contactName);
  }

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
