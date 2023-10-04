import { createContext, useContext } from 'react';

import { ContactRepository } from '@/model/repositories/Contact.repository';
import { InMemoryContactRepository } from '@/infra/repositories/InMemoryContact.repository';
import {
  JaneDoeContact,
  JohnDoeContact,
} from '@/model/entities/Contact.mock-data';

const contactRepository = new InMemoryContactRepository();

contactRepository.initAvailableContacts([JohnDoeContact, JaneDoeContact]);

export const ContactRepositoryContext =
  createContext<ContactRepository>(contactRepository);

export function useContactRepository() {
  return useContext(ContactRepositoryContext);
}
