
import { getUsers } from './getUsers';

describe('getUsers', () => {
  it('should return a list of users', async () => {
    const users = await getUsers();
    expect(users).toEqual([
      { "name": "Erik", "group": 1 },
      { "name": "Lisa", "group": 2 },
      { "name": "Hampus", "group": 2 },
      { "name": "Linda", "group": 3 },
      { "name": "Eva", "group": 1 },
      { "name": "Anna", "group": 3 }
      // Ensure to match the list with the one in getUsers
    ]);
  });
});
