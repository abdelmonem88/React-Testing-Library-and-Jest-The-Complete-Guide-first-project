/* eslint-disable testing-library/no-node-access */
import { getAllByRole, render, screen, within } from '@testing-library/react';

import UserList from './UserList';

describe('userList test', () => {
  const users = [
    {
      name: 'Men3m',
      email: 'test@test.com',
    },
    {
      name: 'Men3m2',
      email: 'test2@test.com',
    },
  ];
  it('should render a table of 2 users', () => {
    // eslint-disable-next-line
    const { container } = render(<UserList users={users} />);
    // eslint-disable-next-line testing-library/no-container
    const usersRows = container.querySelectorAll('tbody tr');

    expect(usersRows).toHaveLength(2);
  });

  it('every tr have email and name', () => {
    render(<UserList users={users} />);

    users.forEach((user) => {
      const name = screen.getByRole('cell', {
        name: user.name,
      });
      const email = screen.getByRole('cell', {
        name: user.email,
      });

      expect(name).toBeInTheDocument();
      expect(email).toBeInTheDocument();
    });
  });
});
