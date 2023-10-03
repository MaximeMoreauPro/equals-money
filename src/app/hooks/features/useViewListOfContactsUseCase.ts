import { useContactRepository } from '@/app/contexts/ContactRepositoryContext';
import { ViewListOfContactsUseCase } from '@/features/ViewListOfContacts/ViewListOfContacts.usecase';

export function useViewListOfContactsUseCase() {
  const contactRepository = useContactRepository();

  const viewListOfContactsUseCase = new ViewListOfContactsUseCase(
    contactRepository,
  );

  return {
    viewListOfContactsUseCase,
  };
}
