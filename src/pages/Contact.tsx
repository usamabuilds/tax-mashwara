import GlassCard from '../components/GlassCard'
import Section from '../components/Section'

function Contact() {
  return (
    <>
      <Section>
        <GlassCard className="contact-hero-card">
          <h1>Contact Tax Mashwara</h1>
          <p>For quick support on tax and compliance matters, message us directly on WhatsApp.</p>
          <a href="https://wa.me/923000000000" target="_blank" rel="noreferrer" className="btn-primary">
            Chat on WhatsApp
          </a>
        </GlassCard>
      </Section>

      <Section>
        <div className="contact-grid">
          <GlassCard className="contact-info-card">
            <h2>Contact details</h2>
            {/* TODO: Add official phone number */}
            <p>Phone: TODO</p>
            {/* TODO: Add official email address */}
            <p>Email: TODO</p>
          </GlassCard>

          <GlassCard className="contact-info-card">
            <h2>Office details</h2>
            {/* TODO: Add official office address */}
            <p>Address: TODO</p>
            {/* TODO: Add official working hours */}
            <p>Hours: TODO</p>
          </GlassCard>
        </div>
      </Section>
    </>
  )
}

export default Contact
