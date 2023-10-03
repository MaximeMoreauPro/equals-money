import { createContext, useContext } from 'react';

import { ContactRepository } from '@/model/repositories/Contact.repository';
import { InMemoryContactRepository } from '@/infra/repositories/InMemoryContact.repository';

const contactRepository = new InMemoryContactRepository();

export const ContactRepositoryContext =
  createContext<ContactRepository>(contactRepository);

export function useContactRepository() {
  return useContext(ContactRepositoryContext);
}
