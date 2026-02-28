import GlassCard from '../components/GlassCard'
import Section from '../components/Section'

const values = ['Compliance', 'Confidentiality', 'Clarity']

function About() {
  return (
    <>
      <Section>
        <GlassCard className="about-hero-card">
          <p className="about-eyebrow">About Tax Mashwara</p>
          <h1>Pakistan-focused tax guidance with practical execution</h1>
          <p>
            We support individuals, freelancers, and businesses with tax, registration, and compliance work that is
            easy to understand and professionally managed.
          </p>
        </GlassCard>
      </Section>

      <Section>
        <div className="about-grid">
          <GlassCard className="about-block-card">
            <h2>Who we are</h2>
            <p>
              We are a focused tax support team helping clients navigate filing, registrations, and regulatory
              obligations in Pakistan with dependable service.
            </p>
          </GlassCard>

          <GlassCard className="about-block-card">
            <h2>How we work</h2>
            <p>
              We begin with your requirement, verify documents, and provide clear updates at each step until your case
              is completed.
            </p>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <GlassCard className="about-values-card">
          <h2>Our values</h2>
          <div className="about-values-row">
            {values.map((value) => (
              <span key={value} className="glass-pill about-value-pill">
                {value}
              </span>
            ))}
          </div>
        </GlassCard>
      </Section>

      <Section>
        <GlassCard className="about-founder-card">
          <h2>Leadership</h2>
          {/* TODO: Add founder photo */}
          {/* TODO: Add founder profile details and credentials */}
          <p>TODO: Founder details will be published soon.</p>
        </GlassCard>
      </Section>
    </>
  )
}

export default About
