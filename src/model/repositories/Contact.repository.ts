import { MinimalDetailsContact } from '@/features/ViewListOfContacts/MinimalDetailsContact';

export interface ContactRepository {
  findAllMinimalDetailsContacts(): Promise<MinimalDetailsContact[]>;
}
