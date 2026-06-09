import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PartnerLogin from './page';

describe('PartnerLogin Component', () => {
  it('renders all login inputs and submit button', () => {
    render(<PartnerLogin />);
    
    expect(screen.getByLabelText('Partner ID')).toBeInTheDocument();
    expect(screen.getByLabelText('Security Key')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Authenticate' })).toBeInTheDocument();
  });

  it('displays validation errors on empty submission', async () => {
    render(<PartnerLogin />);
    
    const submitButton = screen.getByRole('button', { name: 'Authenticate' });
    fireEvent.click(submitButton);

    expect(screen.getByText('Partner ID is required')).toBeInTheDocument();
    expect(screen.getByText('Security Key is required')).toBeInTheDocument();
  });

  it('displays validation error for invalid Partner ID format', () => {
    render(<PartnerLogin />);
    
    const idInput = screen.getByLabelText('Partner ID');
    fireEvent.change(idInput, { target: { value: 'invalid-id' } });
    
    const submitButton = screen.getByRole('button', { name: 'Authenticate' });
    fireEvent.click(submitButton);

    expect(screen.getByText('Partner ID must follow the format EP-XXXX (e.g. EP-1234)')).toBeInTheDocument();
  });

  it('displays validation error if security key is too short', () => {
    render(<PartnerLogin />);
    
    const keyInput = screen.getByLabelText('Security Key');
    fireEvent.change(keyInput, { target: { value: 'short' } });
    
    const submitButton = screen.getByRole('button', { name: 'Authenticate' });
    fireEvent.click(submitButton);

    expect(screen.getByText('Security Key must be at least 8 characters')).toBeInTheDocument();
  });

  it('displays authentication error on invalid credentials', async () => {
    render(<PartnerLogin />);
    
    fireEvent.change(screen.getByLabelText('Partner ID'), { target: { value: 'EP-9999' } });
    fireEvent.change(screen.getByLabelText('Security Key'), { target: { value: 'wrongkey123' } });
    
    const submitButton = screen.getByRole('button', { name: 'Authenticate' });
    fireEvent.click(submitButton);

    // Should enter authenticating state
    expect(screen.getByRole('button', { name: 'Authenticating Secure Session...' })).toBeInTheDocument();

    // Should transition to error state
    await waitFor(() => {
      expect(screen.getByText('Authentication failed. Invalid Partner ID or Security Key.')).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  it('authenticates successfully when credentials are correct', async () => {
    render(<PartnerLogin />);
    
    fireEvent.change(screen.getByLabelText('Partner ID'), { target: { value: 'EP-1111' } });
    fireEvent.change(screen.getByLabelText('Security Key'), { target: { value: 'key12345' } });
    
    const submitButton = screen.getByRole('button', { name: 'Authenticate' });
    fireEvent.click(submitButton);

    // Should transition to success state
    await waitFor(() => {
      expect(screen.getByText('Access Granted')).toBeInTheDocument();
      expect(screen.getByText(/Secure session established/)).toBeInTheDocument();
    }, { timeout: 2000 });
  });
});
