import { fireEvent, render } from '@testing-library/react';
import Login from './Login';

describe('Login Component Tests', () => {
  test('renders the component', () => {
    render(<Login />);
  });
  test('renders email and password fields', () => {
    const { getByLabelText } = render(<Login />);

    const emailField = getByLabelText('Email');
    expect(emailField).toBeInTheDocument();

    const passwordField = getByLabelText('Password');
    expect(passwordField).toBeInTheDocument();
  });

  test('handles input changes', () => {
    const { getByLabelText } = render(<Login />);

    const emailField = getByLabelText('Email');
    fireEvent.change(emailField, { target: { value: 'test@example.com' } });
    expect(emailField.value).toBe('test@example.com');

    const passwordField = getByLabelText('Password');
    fireEvent.change(passwordField, { target: { value: 'password123' } });
    expect(passwordField.value).toBe('password123');
  });

  test('submits the form', () => {
    const { getByLabelText, getByText } = render(<Login />);

    const emailField = getByLabelText('Email');
    const passwordField = getByLabelText('Password');
    const submitButton = getByText('Submit');

    fireEvent.change(emailField, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordField, { target: { value: 'password123' } });

    fireEvent.click(submitButton);

    // Add your assertions for form submission handling here
  });
});
