import { ContactRepository } from '@/model/repositories/Contact.repository';

import { MinimalDetailsContact } from './MinimalDetailsContact';

type ViewListOfContactsUseCaseReturn = Promise<MinimalDetailsContact[]>;

export class ViewListOfContactsUseCase {
  constructor(private readonly contactRepository: ContactRepository) {}

  async handle(): ViewListOfContactsUseCaseReturn {
    return this.contactRepository.findAllMinimalDetailsContacts();
  }
}
