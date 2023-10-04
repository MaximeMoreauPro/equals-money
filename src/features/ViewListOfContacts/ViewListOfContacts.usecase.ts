import {
  ContactRepository,
  MinimalDetailsContact,
} from '@/model/repositories/Contact.repository';

type ViewListOfContactsUseCaseResult = Promise<MinimalDetailsContact[]>;

export class ViewListOfContactsUseCase {
  constructor(private readonly contactRepository: ContactRepository) {}

  async handle(): ViewListOfContactsUseCaseResult {
    return this.contactRepository.findAllMinimalDetailsContacts();
  }
}
