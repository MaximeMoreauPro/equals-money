import { useEffect, useState } from 'react';

import { Contact } from '@/model/entities/Contact';
import { useViewDetailsAboutContactUseCase } from '@/app/hooks/features/useViewDetailsAboutContactUseCase';
import { useParams } from 'react-router-dom';

type UseViewDetailsAboutContactReturn = {
  isContactLoading: boolean;
} & (
  | { contact: Contact }
  | { noContactFoundMessage: string }
  | NonNullable<unknown>
);

export function useViewDetailsAboutContact(): UseViewDetailsAboutContactReturn {
  const { contactName } = useParams();

  const [isContactLoading, setIsContactLoading] = useState(false);

  const [contact, setContact] = useState<Contact | undefined>(undefined);
  const [noContactFoundMessage, setNoContactFoundMessage] = useState<
    string | undefined
  >(undefined);

  const { viewDetailsAboutContactUseCase } =
    useViewDetailsAboutContactUseCase();

  useEffect(() => {
    async function fetchContacts(contactName: Contact['name']) {
      setIsContactLoading(true);
      const result = await viewDetailsAboutContactUseCase.handle({
        contactName,
      });

      if ('contactDetails' in result) {
        setContact(result.contactDetails);
      }

      if ('noContactFoundMessage' in result) {
        setNoContactFoundMessage(result.noContactFoundMessage);
      }
      setIsContactLoading(false);
    }

    if (contactName) {
      fetchContacts(contactName);
    }
  }, [contactName]);

  if (contact) {
    return { isContactLoading, contact };
  }

  if (noContactFoundMessage) {
    return { isContactLoading, noContactFoundMessage };
  }

  return { isContactLoading };
}
