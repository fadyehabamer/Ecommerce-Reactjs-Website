import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { ProductProvider } from './Context';
import { AuthenticatedUserProvider } from './context/AuthenticatedUser';
import { RegisteredUsersProvider } from './context/RegisteredUsers';

function renderAt(path) {
  return render(
    <ProductProvider>
      <AuthenticatedUserProvider>
        <RegisteredUsersProvider>
          <MemoryRouter initialEntries={[path]}>
            <App />
          </MemoryRouter>
        </RegisteredUsersProvider>
      </AuthenticatedUserProvider>
    </ProductProvider>
  );
}

beforeEach(() => localStorage.clear());

test('renders the landing page', () => {
  renderAt('/');
  expect(screen.getByText(/our statistics/i)).toBeInTheDocument();
});

test('asks unregistered visitors to register before showing products', () => {
  renderAt('/productList');
  expect(screen.getByText(/first/i)).toHaveTextContent(/you must register first/i);
});

test('shows the 404 page for unknown URLs', () => {
  renderAt('/does/not/exist');
  expect(screen.getByText(/was\s+not found/i)).toBeInTheDocument();
});

test('shows an empty cart', () => {
  renderAt('/cart');
  expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
});
