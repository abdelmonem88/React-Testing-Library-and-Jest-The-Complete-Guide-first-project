import { render, screen, within } from '@testing-library/react';
import userEvents from '@testing-library/user-event';

import App from './App';

describe('App tests', () => {
  it('should render user form and users list after adding new user', () => {
    render(<App />);

    const nameInput = screen.getByRole('textbox', {
      name: 'Name',
    });
    userEvents.click(nameInput);
    userEvents.keyboard('men3m');

    const emailInput = screen.getByRole('textbox', {
      name: 'Email',
    });
    userEvents.click(emailInput);
    userEvents.keyboard('men3m@test.com');

    const submitBtn = screen.getByRole('button');
    userEvents.click(submitBtn);

    const nameCell = screen.getByRole('cell', {
      name: 'men3m',
    });
    const emailCell = screen.getByRole('cell', {
      name: 'men3m@test.com',
    });
    expect(nameCell).toBeInTheDocument();
    expect(emailCell).toBeInTheDocument();
    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
  });
});
