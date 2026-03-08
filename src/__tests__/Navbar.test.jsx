import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

const renderNavbar = () => {
  return render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
};

describe('Navbar', () => {
  it('renders the logo', () => {
    renderNavbar();
    expect(screen.getByText('MB')).toBeInTheDocument();
    expect(screen.getByText('Extension')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    renderNavbar();
    // Desktop + mobile menu both render links, so use getAllByText
    expect(screen.getAllByText('HOME').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('PRODUCTS').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('ABOUT').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('FAQ').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('CONTACT').length).toBeGreaterThanOrEqual(1);
  });

  it('mobile menu starts closed', () => {
    renderNavbar();
    const mobileMenu = document.querySelector('.mobile-menu');
    expect(mobileMenu).not.toHaveClass('mobile-menu-open');
  });

  it('toggles mobile menu on button click', () => {
    renderNavbar();
    const toggleBtn = screen.getByLabelText('Open navigation menu');
    fireEvent.click(toggleBtn);
    const mobileMenu = document.querySelector('.mobile-menu');
    expect(mobileMenu).toHaveClass('mobile-menu-open');
  });
});
