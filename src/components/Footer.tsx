import Section from './Section'

function Footer() {
  return (
    <footer>
      <Section>
        <div className="glass-card" style={{ padding: '1.25rem 1.1rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
              marginBottom: '0.9rem',
            }}
          >
            <div>
              <h3 style={{ marginBottom: '0.45rem' }}>Contact</h3>
              {/* TODO: Replace with official phone number */}
              <p>Phone: TODO</p>
              {/* TODO: Replace with official email address */}
              <p>Email: TODO</p>
            </div>

            <div>
              <h3 style={{ marginBottom: '0.45rem' }}>Office</h3>
              {/* TODO: Replace with full office address */}
              <p>Address: TODO</p>
              {/* TODO: Replace with office hours */}
              <p>Hours: TODO</p>
            </div>

            <div>
              <h3 style={{ marginBottom: '0.45rem' }}>Tax Mashwara</h3>
              <p>Trusted support for tax, registration, and compliance services across Pakistan.</p>
            </div>
          </div>

          <small style={{ display: 'block', color: 'var(--muted)' }}>
            Disclaimer: Content is for general information and does not constitute legal or tax advice.
          </small>
        </div>
      </Section>
    </footer>
  )
}

export default Footer
