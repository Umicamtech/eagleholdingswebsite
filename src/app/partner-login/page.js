'use client';

import { useState } from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function PartnerLogin() {
  const [formData, setFormData] = useState({
    partnerId: '',
    securityKey: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, authenticating, success, error
  const [authError, setAuthError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    setAuthError('');
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.partnerId.trim()) {
      newErrors.partnerId = 'Partner ID is required';
    } else if (!/^EP-\d{4}$/.test(formData.partnerId.trim())) {
      newErrors.partnerId = 'Partner ID must follow the format EP-XXXX (e.g. EP-1234)';
    }

    if (!formData.securityKey) {
      newErrors.securityKey = 'Security Key is required';
    } else if (formData.securityKey.length < 8) {
      newErrors.securityKey = 'Security Key must be at least 8 characters';
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

    setStatus('authenticating');
    setAuthError('');

    try {
      // Simulate secure handshakes/decryption latency
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Simple mock credentials: ID "EP-1111" and security key "key12345"
      if (formData.partnerId.trim() === 'EP-1111' && formData.securityKey === 'key12345') {
        setStatus('success');
      } else {
        throw new Error('Authentication failed. Invalid Partner ID or Security Key.');
      }
    } catch (err) {
      setStatus('error');
      setAuthError(err.message);
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
        <h2 style={{ marginBottom: '2rem' }}>Partner Portal</h2>
        <div style={{ 
          backgroundColor: 'var(--deep-slate)', 
          padding: '4rem', 
          borderRadius: '8px', 
          border: '1px solid var(--gold)',
          maxWidth: '500px',
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--obsidian)', marginBottom: '1rem' }}>Access Granted</h3>
              <p style={{ color: 'var(--platinum)', marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                Secure session established. Redirecting to the strategic briefings dashboard...
              </p>
            </div>
          ) : (
            <>
              <p style={{ marginBottom: '2rem', opacity: 0.7 }}>
                Secure access to global strategic briefings and project data.
              </p>

              {authError && (
                <div style={{
                  backgroundColor: 'rgba(217, 83, 79, 0.1)',
                  border: '1px solid #d9534f',
                  color: '#d9534f',
                  padding: '0.75rem',
                  borderRadius: '4px',
                  marginBottom: '1.5rem',
                  fontSize: '0.9rem',
                  textAlign: 'left'
                }}>
                  {authError}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', textAlign: 'left' }}>
                  <input 
                    type="text" 
                    name="partnerId"
                    placeholder="Partner ID (e.g. EP-1234)" 
                    value={formData.partnerId}
                    onChange={handleChange}
                    aria-label="Partner ID"
                    style={{ 
                      padding: '1rem', 
                      backgroundColor: 'var(--obsidian)', 
                      border: errors.partnerId ? '1px solid #d9534f' : '1px solid rgba(229, 228, 226, 0.2)', 
                      color: 'var(--platinum)',
                      borderRadius: '4px'
                    }} 
                  />
                  {errors.partnerId && (
                    <span style={{ color: '#d9534f', fontSize: '0.75rem' }}>{errors.partnerId}</span>
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', textAlign: 'left' }}>
                  <input 
                    type="password" 
                    name="securityKey"
                    placeholder="Security Key" 
                    value={formData.securityKey}
                    onChange={handleChange}
                    aria-label="Security Key"
                    style={{ 
                      padding: '1rem', 
                      backgroundColor: 'var(--obsidian)', 
                      border: errors.securityKey ? '1px solid #d9534f' : '1px solid rgba(229, 228, 226, 0.2)', 
                      color: 'var(--platinum)',
                      borderRadius: '4px'
                    }} 
                  />
                  {errors.securityKey && (
                    <span style={{ color: '#d9534f', fontSize: '0.75rem' }}>{errors.securityKey}</span>
                  )}
                </div>

                <button 
                  type="submit"
                  disabled={status === 'authenticating'}
                  style={{ 
                    backgroundColor: 'var(--gold)', 
                    color: 'var(--obsidian)', 
                    padding: '1rem', 
                    borderRadius: '4px',
                    fontWeight: '600',
                    marginTop: '1rem',
                    opacity: status === 'authenticating' ? 0.7 : 1,
                    cursor: status === 'authenticating' ? 'not-allowed' : 'pointer'
                  }}
                >
                  {status === 'authenticating' ? 'Authenticating Secure Session...' : 'Authenticate'}
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

