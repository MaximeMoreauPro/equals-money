import { MinimalDetailsContact } from '@/usecases/ViewListOfContacts/MinimalDetailsContact';

export interface ContactRepository {
  findAllMinimalDetailsContacts(): Promise<MinimalDetailsContact[]>;
}
