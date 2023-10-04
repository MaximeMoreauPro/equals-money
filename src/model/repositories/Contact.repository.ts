import { Contact } from '../entities/Contact';

export type MinimalDetailsContact = Pick<Contact, 'name' | 'avatar'>;

export interface ContactRepository {
  findDetailsAboutContact(
    contactName: Contact['name'],
  ): Promise<Contact | undefined>;

  findAllMinimalDetailsContacts(): Promise<MinimalDetailsContact[]>;
}
