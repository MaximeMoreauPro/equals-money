import {
  JaneDoeContact,
  JohnDoeContact,
} from '@/model/entities/Contact.mock-data';

import { createFixture } from './ViewDetailsAboutContact.usecase.test-fixture';

describe('Feature: view details about a contact', () => {
  let fixture: ReturnType<typeof createFixture>;

  beforeEach(() => {
    fixture = createFixture();
  });

  it('Scenario: user views the details about an existing contact', async () => {
    fixture.givenTheseContactsExist([JohnDoeContact]);
    await fixture.whenUserViewsTheDetailsAboutContact(JohnDoeContact.name);
    fixture.thenTheDisplayedDetailsAboutContactIs(JohnDoeContact);
    fixture.thenTheDisplayedNoContactMessageIs(undefined);
  });

  it('Scenario: user views the no contact found message if the contact does not exist', async () => {
    fixture.givenTheseContactsExist([JohnDoeContact]);
    await fixture.whenUserViewsTheDetailsAboutContact(JaneDoeContact.name);
    fixture.thenTheDisplayedDetailsAboutContactIs(undefined);
    fixture.thenTheDisplayedNoContactMessageIs(
      `No contact found with name ${JaneDoeContact.name}`,
    );
  });
});
