'use client';

import { useState } from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function RequestCredentials() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    purpose: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [refNumber, setRefNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Corporate email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid corporate email address';
    } else {
      const domain = formData.email.split('@')[1]?.toLowerCase();
      const genericDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'aol.com', 'mail.com'];
      if (genericDomains.includes(domain)) {
        newErrors.email = 'A corporate email address is required. Public email providers are not accepted.';
      }
    }

    if (!formData.purpose.trim()) {
      newErrors.purpose = 'Purpose of request is required';
    } else if (formData.purpose.trim().length < 20) {
      newErrors.purpose = 'Please provide a detailed purpose (minimum 20 characters)';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');
    
    try {
      // Simulate verification api delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      const secureRef = 'EHG-' + Math.random().toString(36).substring(2, 10).toUpperCase();
      setRefNumber(secureRef);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <main>
      <Header />
      <section style={{ 
        minHeight: '80vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: '8rem 2rem',
        background: 'radial-gradient(circle at top, rgba(165, 139, 62, 0.05) 0%, transparent 70%)'
      }}>
        <h2 style={{ marginBottom: '2rem' }}>Credential Request</h2>
        <div style={{ 
          backgroundColor: 'var(--deep-slate)', 
          padding: '4rem', 
          borderRadius: '8px', 
          border: '1px solid var(--gold)',
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center'
        }}>
          {status === 'success' ? (
            <div className="fade-in" style={{ padding: '1rem 0' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(165, 139, 62, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                border: '1px solid var(--gold)'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--obsidian)', marginBottom: '1rem' }}>Request Submitted</h3>
              <p style={{ color: 'var(--platinum)', marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                Your request has been successfully queued for secure screening. Eagle Holdings Compliance Department will review your corporate credentials within 24-48 business hours.
              </p>
              
              <div style={{
                backgroundColor: 'rgba(165, 139, 62, 0.05)',
                border: '1px dashed var(--gold)',
                borderRadius: '6px',
                padding: '1rem',
                marginBottom: '2rem',
                display: 'inline-block',
                minWidth: '240px'
              }}>
                <span style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--platinum)', marginBottom: '0.25rem' }}>
                  Reference Number
                </span>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--gold)', letterSpacing: '0.05em' }}>
                  {refNumber}
                </span>
              </div>
              
              <button 
                onClick={() => {
                  setFormData({ firstName: '', lastName: '', email: '', purpose: '' });
                  setErrors({});
                  setStatus('idle');
                }}
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid var(--gold)',
                  color: 'var(--gold)',
                  padding: '0.75rem 2rem',
                  borderRadius: '4px',
                  fontWeight: '600'
                }}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <>
              <p style={{ marginBottom: '2rem', opacity: 0.7 }}>
                New stakeholders may request access to the Partner Portal. Each request undergoes a rigorous verification process.
              </p>
              <form onSubmit={handleSubmit} noValidate style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', textAlign: 'left' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <input 
                    type="text" 
                    name="firstName"
                    placeholder="First Name" 
                    value={formData.firstName}
                    onChange={handleChange}
                    aria-label="First Name"
                    style={{ 
                      padding: '1rem', 
                      backgroundColor: 'var(--obsidian)', 
                      border: errors.firstName ? '1px solid #d9534f' : '1px solid rgba(229, 228, 226, 0.2)', 
                      color: 'var(--platinum)', 
                      borderRadius: '4px' 
                    }} 
                  />
                  {errors.firstName && (
                    <span style={{ color: '#d9534f', fontSize: '0.75rem' }}>{errors.firstName}</span>
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <input 
                    type="text" 
                    name="lastName"
                    placeholder="Last Name" 
                    value={formData.lastName}
                    onChange={handleChange}
                    aria-label="Last Name"
                    style={{ 
                      padding: '1rem', 
                      backgroundColor: 'var(--obsidian)', 
                      border: errors.lastName ? '1px solid #d9534f' : '1px solid rgba(229, 228, 226, 0.2)', 
                      color: 'var(--platinum)', 
                      borderRadius: '4px' 
                    }} 
                  />
                  {errors.lastName && (
                    <span style={{ color: '#d9534f', fontSize: '0.75rem' }}>{errors.lastName}</span>
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', gridColumn: 'span 2' }}>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Corporate Email" 
                    value={formData.email}
                    onChange={handleChange}
                    aria-label="Corporate Email"
                    style={{ 
                      padding: '1rem', 
                      backgroundColor: 'var(--obsidian)', 
                      border: errors.email ? '1px solid #d9534f' : '1px solid rgba(229, 228, 226, 0.2)', 
                      color: 'var(--platinum)', 
                      borderRadius: '4px' 
                    }} 
                  />
                  {errors.email && (
                    <span style={{ color: '#d9534f', fontSize: '0.75rem' }}>{errors.email}</span>
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', gridColumn: 'span 2' }}>
                  <textarea 
                    name="purpose"
                    placeholder="Purpose of Request" 
                    rows="4"
                    value={formData.purpose}
                    onChange={handleChange}
                    aria-label="Purpose of Request"
                    style={{ 
                      padding: '1rem', 
                      backgroundColor: 'var(--obsidian)', 
                      border: errors.purpose ? '1px solid #d9534f' : '1px solid rgba(229, 228, 226, 0.2)', 
                      color: 'var(--platinum)', 
                      borderRadius: '4px',
                      resize: 'none' 
                    }} 
                  ></textarea>
                  {errors.purpose && (
                    <span style={{ color: '#d9534f', fontSize: '0.75rem' }}>{errors.purpose}</span>
                  )}
                </div>

                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  style={{ 
                    backgroundColor: 'var(--gold)', 
                    color: 'var(--obsidian)', 
                    padding: '1rem', 
                    borderRadius: '4px',
                    fontWeight: '600',
                    gridColumn: 'span 2',
                    marginTop: '1rem',
                    opacity: status === 'submitting' ? 0.7 : 1,
                    cursor: status === 'submitting' ? 'not-allowed' : 'pointer'
                  }}
                >
                  {status === 'submitting' ? 'Verifying Request...' : 'Submit Request'}
                </button>
              </form>
            </>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}

