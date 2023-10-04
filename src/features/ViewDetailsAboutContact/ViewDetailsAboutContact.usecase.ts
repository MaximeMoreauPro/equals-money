import { Contact } from '@/model/entities/Contact';
import { ContactRepository } from '@/model/repositories/Contact.repository';

type ViewDetailsAboutContactUseCaseQuery = {
  contactName: Contact['name'];
};

type ViewDetailsAboutContactUseCaseResult = Promise<
  { contactDetails: Contact } | { noContactMessage: string }
>;

export class ViewDetailsAboutContactUseCase {
  constructor(private readonly contactRepository: ContactRepository) {}

  async handle({
    contactName,
  }: ViewDetailsAboutContactUseCaseQuery): ViewDetailsAboutContactUseCaseResult {
    const contactDetails =
      await this.contactRepository.findDetailsAboutContact(contactName);

    if (contactDetails) {
      return { contactDetails };
    }
    return { noContactMessage: `No contact found with name ${contactName}` };
  }
}
