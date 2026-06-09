import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RequestCredentials from './page';

describe('RequestCredentials Component', () => {
  it('renders all form inputs and submit button', () => {
    render(<RequestCredentials />);
    
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Corporate Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Purpose of Request')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit Request' })).toBeInTheDocument();
  });

  it('displays validation errors on empty submission', async () => {
    render(<RequestCredentials />);
    
    const submitButton = screen.getByRole('button', { name: 'Submit Request' });
    fireEvent.click(submitButton);

    expect(screen.getByText('First name is required')).toBeInTheDocument();
    expect(screen.getByText('Last name is required')).toBeInTheDocument();
    expect(screen.getByText('Corporate email is required')).toBeInTheDocument();
    expect(screen.getByText('Purpose of request is required')).toBeInTheDocument();
  });

  it('displays validation error for invalid email structure', () => {
    render(<RequestCredentials />);
    
    const emailInput = screen.getByLabelText('Corporate Email');
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    
    const submitButton = screen.getByRole('button', { name: 'Submit Request' });
    fireEvent.click(submitButton);

    expect(screen.getByText('Please enter a valid corporate email address')).toBeInTheDocument();
  });

  it('displays validation error for public generic email providers', () => {
    render(<RequestCredentials />);
    
    const emailInput = screen.getByLabelText('Corporate Email');
    fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } });
    
    const submitButton = screen.getByRole('button', { name: 'Submit Request' });
    fireEvent.click(submitButton);

    expect(screen.getByText('A corporate email address is required. Public email providers are not accepted.')).toBeInTheDocument();
  });

  it('displays validation error if purpose of request is less than 20 characters', () => {
    render(<RequestCredentials />);
    
    const purposeInput = screen.getByLabelText('Purpose of Request');
    fireEvent.change(purposeInput, { target: { value: 'short text' } });
    
    const submitButton = screen.getByRole('button', { name: 'Submit Request' });
    fireEvent.click(submitButton);

    expect(screen.getByText('Please provide a detailed purpose (minimum 20 characters)')).toBeInTheDocument();
  });

  it('submits form successfully when all inputs are valid', async () => {
    render(<RequestCredentials />);
    
    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText('Corporate Email'), { target: { value: 'john.doe@eagleholdings.com' } });
    fireEvent.change(screen.getByLabelText('Purpose of Request'), { target: { value: 'Requesting access to the partner portal for reviewing the pipeline assets.' } });
    
    const submitButton = screen.getByRole('button', { name: 'Submit Request' });
    fireEvent.click(submitButton);

    // Should enter submitting state
    expect(screen.getByRole('button', { name: 'Verifying Request...' })).toBeInTheDocument();

    // Should transition to success state
    await waitFor(() => {
      expect(screen.getByText('Request Submitted')).toBeInTheDocument();
    }, { timeout: 2000 });

    expect(screen.getByText(/Reference Number/i)).toBeInTheDocument();
    expect(screen.getByText(/EHG-[A-Z0-9]+/)).toBeInTheDocument();
  });
});
