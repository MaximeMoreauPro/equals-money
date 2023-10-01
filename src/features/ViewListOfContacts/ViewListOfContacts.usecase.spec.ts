import { createFixture } from './ViewListOfContacts.usecase.test-fixture';

describe('Feature: view list of contacts', () => {
  let fixture: ReturnType<typeof createFixture>;

  beforeEach(() => {
    fixture = createFixture();
  });

  it('Scenario: user views the list of existing contacts', async () => {
    fixture.givenTheseContactsExist([
      {
        name: 'John Doe',
        avatar: 'https://example.com/john-doe.png',
        createdAt: '2020-01-01T00:00:00.000Z',
        email: 'johndoe@test.com',
        phone: '+1 234 567 890',
        birthday: '1990-01-01',
      },
      {
        name: 'Jane Doe',
        avatar: 'https://example.com/jane-doe.png',
        createdAt: '2020-01-01T00:00:00.000Z',
        email: 'janedoe@test.com',
        phone: '+1 234 567 891',
        birthday: '1992-03-04',
      },
    ]);
    await fixture.whenUserViewsTheListOfContacts();
    fixture.thenTheDisplayedListOfContactsIs([
      {
        name: 'John Doe',
        avatar: 'https://example.com/john-doe.png',
      },
      {
        name: 'Jane Doe',
        avatar: 'https://example.com/jane-doe.png',
      },
    ]);
  });
});
