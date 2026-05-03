import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function RequestCredentials() {
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
          <p style={{ marginBottom: '2rem', opacity: 0.7 }}>
            New stakeholders may request access to the Partner Portal. Each request undergoes a rigorous verification process.
          </p>
          <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', textAlign: 'left' }}>
            <input 
              type="text" 
              placeholder="First Name" 
              style={{ padding: '1rem', backgroundColor: 'var(--obsidian)', border: '1px solid rgba(229, 228, 226, 0.2)', color: 'var(--platinum)', borderRadius: '4px' }} 
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              style={{ padding: '1rem', backgroundColor: 'var(--obsidian)', border: '1px solid rgba(229, 228, 226, 0.2)', color: 'var(--platinum)', borderRadius: '4px' }} 
            />
            <input 
              type="email" 
              placeholder="Corporate Email" 
              style={{ padding: '1rem', backgroundColor: 'var(--obsidian)', border: '1px solid rgba(229, 228, 226, 0.2)', color: 'var(--platinum)', borderRadius: '4px', gridColumn: 'span 2' }} 
            />
            <textarea 
              placeholder="Purpose of Request" 
              rows="4"
              style={{ padding: '1rem', backgroundColor: 'var(--obsidian)', border: '1px solid rgba(229, 228, 226, 0.2)', color: 'var(--platinum)', borderRadius: '4px', gridColumn: 'span 2' }} 
            ></textarea>
            <button style={{ 
              backgroundColor: 'var(--gold)', 
              color: 'var(--obsidian)', 
              padding: '1rem', 
              borderRadius: '4px',
              fontWeight: '600',
              gridColumn: 'span 2',
              marginTop: '1rem'
            }}>
              Submit Request
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
