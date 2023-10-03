import { useEffect, useState } from 'react';

import { MinimalDetailsContact } from '@/features/ViewListOfContacts/MinimalDetailsContact';

type UseViewListOfContactsReturn = {
  isContactsLoading: boolean;
  contacts: MinimalDetailsContact[];
};

export function useViewListOfContacts(): UseViewListOfContactsReturn {
  const [isContactsLoading, setIsContactsLoading] = useState(false);

  const [contacts, setContacts] = useState<MinimalDetailsContact[]>([]);

  useEffect(() => {
    setIsContactsLoading(true);
    setContacts([
      { name: 'John Doe', avatar: '' },
      { name: 'Jane Doe', avatar: '' },
    ]);
    setIsContactsLoading(false);
  }, []);

  return { contacts, isContactsLoading };
}
