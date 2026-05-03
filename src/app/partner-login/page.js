import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function PartnerLogin() {
  return (
    <main>
      <Header />
      <section style={{ 
        minHeight: '80vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: '8rem 2rem'
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
          <p style={{ marginBottom: '2rem', opacity: 0.7 }}>
            Secure access to global strategic briefings and project data.
          </p>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input 
              type="text" 
              placeholder="Partner ID" 
              style={{ 
                padding: '1rem', 
                backgroundColor: 'var(--obsidian)', 
                border: '1px solid rgba(229, 228, 226, 0.2)', 
                color: 'var(--platinum)',
                borderRadius: '4px'
              }} 
            />
            <input 
              type="password" 
              placeholder="Security Key" 
              style={{ 
                padding: '1rem', 
                backgroundColor: 'var(--obsidian)', 
                border: '1px solid rgba(229, 228, 226, 0.2)', 
                color: 'var(--platinum)',
                borderRadius: '4px'
              }} 
            />
            <button style={{ 
              backgroundColor: 'var(--gold)', 
              color: 'var(--obsidian)', 
              padding: '1rem', 
              borderRadius: '4px',
              fontWeight: '600',
              marginTop: '1rem'
            }}>
              Authenticate
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
