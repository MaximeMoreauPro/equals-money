import { Contact } from '../../entities/Contact';

export type MinimalDetailsContact = Pick<Contact, 'name' | 'avatar'>;
