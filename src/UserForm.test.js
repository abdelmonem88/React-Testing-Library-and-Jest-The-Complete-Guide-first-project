import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import UserForm from './UserForm';

describe('user form  tests', () => {
  it('should render correctly', () => {
    render(<UserForm />);
    const inputs = screen.getAllByRole('textbox');
    const submitBtn = screen.getByRole('button');

    expect(inputs).toHaveLength(2);
    expect(submitBtn).toBeInTheDocument();
  });

  it('should submit given name and email', () => {
    const mock = jest.fn();
    render(<UserForm onUserAdd={mock} />);

    const nameInput = screen.getByRole('textbox', {
      name: /name/i,
    });
    userEvent.click(nameInput);
    userEvent.keyboard('men3m');

    const emailInput = screen.getByRole('textbox', {
      name: /email/i,
    });
    userEvent.click(emailInput);
    userEvent.keyboard('test@test.com');

    const submitBtn = screen.getByRole('button');
    userEvent.click(submitBtn);

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({
      name: 'men3m',
      email: 'test@test.com',
    });
  });
});
