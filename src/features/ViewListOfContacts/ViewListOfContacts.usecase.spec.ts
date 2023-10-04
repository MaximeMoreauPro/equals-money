import {
  JaneDoeContact,
  JohnDoeContact,
} from '@/model/entities/Contact.mock-data';

import { createFixture } from './ViewListOfContacts.usecase.test-fixture';

describe('Feature: view list of contacts', () => {
  let fixture: ReturnType<typeof createFixture>;

  beforeEach(() => {
    fixture = createFixture();
  });

  it('Scenario: user views the list of existing contacts', async () => {
    fixture.givenTheseContactsExist([JohnDoeContact, JaneDoeContact]);
    await fixture.whenUserViewsTheListOfContacts();
    fixture.thenTheDisplayedListOfContactsIs([
      {
        name: JohnDoeContact.name,
        avatar: JohnDoeContact.avatar,
      },
      {
        name: JaneDoeContact.name,
        avatar: JaneDoeContact.avatar,
      },
    ]);
  });
});
