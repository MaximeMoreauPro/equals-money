import { useContactRepository } from '@/app/contexts/ContactRepositoryContext';
import { ViewDetailsAboutContactUseCase } from '@/features/ViewDetailsAboutContact/ViewDetailsAboutContact.usecase';

export function useViewDetailsAboutContactUseCase() {
  const contactRepository = useContactRepository();

  const viewDetailsAboutContactUseCase = new ViewDetailsAboutContactUseCase(
    contactRepository,
  );

  return {
    viewDetailsAboutContactUseCase,
  };
}
