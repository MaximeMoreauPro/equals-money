import {
  ContactRepository,
  MinimalDetailsContact,
} from '@/model/repositories/Contact.repository';

type ViewListOfContactsUseCaseReturn = Promise<MinimalDetailsContact[]>;

export class ViewListOfContactsUseCase {
  constructor(private readonly contactRepository: ContactRepository) {}

  async handle(): ViewListOfContactsUseCaseReturn {
    return this.contactRepository.findAllMinimalDetailsContacts();
  }
}
