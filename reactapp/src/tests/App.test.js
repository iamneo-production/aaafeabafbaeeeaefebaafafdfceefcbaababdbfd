import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders input type password', () => {
  const { getByLabelText } = render(<App />);
  const passwordInput = getByLabelText('Password:');
  expect(passwordInput).toBeInTheDocument();
  expect(passwordInput).toHaveAttribute('type', 'password');
});

test('renders input type email', () => {
  const { getByLabelText } = render(<App />);
  const emailInput = getByLabelText('Email:');
  expect(emailInput).toBeInTheDocument();
  expect(emailInput).toHaveAttribute('type', 'email');
});

test('renders register button', () => {
  const { getByText } = render(<App />);
  const registerButton = getByText('Register');
  expect(registerButton).toBeInTheDocument();
});

test('submits the form', () => {
  const { getByText, getByLabelText } = render(<App />);
  const usernameInput = getByLabelText('Username:');
  const emailInput = getByLabelText('Email:');
  const passwordInput = getByLabelText('Password:');
  const registerButton = getByText('Register');

  // Fill in the form fields
  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  // Submit the form
  fireEvent.click(registerButton);

  // Check that the form submitted successfully message is displayed
  const successMessage = getByText('Registration successful!');
  expect(successMessage).toBeInTheDocument();
});
