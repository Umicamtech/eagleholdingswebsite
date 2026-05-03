import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('renders the brand name', () => {
    render(<Header />);
    expect(screen.getByText('EAGLE HOLDINGS')).toBeInTheDocument();
  });

  it('renders the navigation buttons', () => {
    render(<Header />);
    expect(screen.getByText('Partner Login')).toBeInTheDocument();
    expect(screen.getByText('Request Credentials')).toBeInTheDocument();
  });

  it('renders the logo image', () => {
    render(<Header />);
    const logo = screen.getByAltText('Eagle Holdings Logo');
    expect(logo).toBeInTheDocument();
  });
});
