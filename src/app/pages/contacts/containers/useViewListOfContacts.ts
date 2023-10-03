import { useEffect, useState } from 'react';

import { MinimalDetailsContact } from '@/features/ViewListOfContacts/MinimalDetailsContact';
import { useViewListOfContactsUseCase } from '@/app/hooks/features/useViewListOfContactsUseCase';

type UseViewListOfContactsReturn = {
  isContactsLoading: boolean;
  contacts: MinimalDetailsContact[];
};

export function useViewListOfContacts(): UseViewListOfContactsReturn {
  const [isContactsLoading, setIsContactsLoading] = useState(false);

  const [contacts, setContacts] = useState<MinimalDetailsContact[]>([]);

  const { viewListOfContactsUseCase } = useViewListOfContactsUseCase();

  useEffect(() => {
    async function fetchContacts() {
      setIsContactsLoading(true);
      const contacts = await viewListOfContactsUseCase.handle();
      setContacts(contacts);
      setIsContactsLoading(false);
    }
    fetchContacts();
  }, []);

  return { contacts, isContactsLoading };
}
