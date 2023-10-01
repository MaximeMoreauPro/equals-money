import { Contact } from '../../model/entities/Contact';

export type MinimalDetailsContact = Pick<Contact, 'name' | 'avatar'>;
