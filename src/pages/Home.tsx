import { Link } from 'react-router-dom'
import GlassCard from '../components/GlassCard'
import Section from '../components/Section'
import { services } from '../data/services'
import { track } from '../lib/analytics'

const trustItems = ['FBR compliant', 'Confidential', 'Fast turnaround', 'Professional support']

const steps = [
  {
    title: '1. Share your requirement',
    description: 'Tell us your tax or registration need on WhatsApp and receive a clear checklist.',
  },
  {
    title: '2. Submit documents',
    description: 'We review your documents and prepare filings aligned with Pakistan compliance standards.',
  },
  {
    title: '3. Get completion updates',
    description: 'Track your progress and receive final confirmation with practical next-step guidance.',
  },
]

function Home() {
  return (
    <>
      <Section>
        <GlassCard className="home-hero">
          <p className="home-eyebrow">Tax Mashwara Pakistan</p>
          <h1>Trusted tax and compliance support for individuals and businesses</h1>
          <p className="home-subcopy">
            From NTN and return filing to company compliance, we help you handle tax matters with clarity,
            confidentiality, and professional care.
          </p>
          <div className="home-actions">
            <a href="https://wa.me/923000000000" target="_blank" rel="noreferrer" className="btn-primary" onClick={() => track('whatsapp_click_hero')}>
              Chat on WhatsApp
            </a>
            <Link to="/calculator" className="home-secondary-btn">
              Open Tax Calculator
            </Link>
          </div>
        </GlassCard>
      </Section>

      <Section>
        <div className="home-pill-row">
          {trustItems.map((item) => (
            <GlassCard key={item} className="home-pill-card">
              <span className="glass-pill home-pill">{item}</span>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <div className="home-heading-wrap">
          <h2>Core services</h2>
          <p>Explore Pakistan-focused tax and compliance services built for practical outcomes.</p>
        </div>
        <div className="home-services-grid">
          {services.map((service) => (
            <GlassCard key={service.slug} className="home-service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={`/services/${service.slug}`} className="home-service-link"
                onClick={() => track('service_card_click', { slug: service.slug, source: 'home' })}
              >
                View details
              </Link>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <div className="home-heading-wrap">
          <h2>How it works</h2>
          <p>A simple, guided process that keeps compliance straightforward.</p>
        </div>
        <div className="home-steps-grid">
          {steps.map((step) => (
            <GlassCard key={step.title} className="home-step-card">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <GlassCard className="home-teaser-card">
          <h2>Tax calculator teaser</h2>
          <p>
            Quickly estimate your obligations with our calculator section. We&apos;ll keep it simple and focused for
            Pakistan tax use-cases.
          </p>
          <Link to="/calculator" className="home-secondary-btn">
            Go to calculator
          </Link>
        </GlassCard>
      </Section>

      <Section>
        <div className="home-heading-wrap">
          <h2>Client testimonials</h2>
          <p>Early placeholders for social proof. Video testimonials will be added later.</p>
        </div>
        <div className="home-testimonials-grid">
          {[1, 2, 3].map((idx) => (
            <GlassCard key={idx} className="home-testimonial-card">
              <h3>Client story {idx}</h3>
              <p>TODO: Add customer quote and short business context.</p>
              <small>TODO: Embed video testimonial later.</small>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <GlassCard className="home-final-cta">
          <h2>Need help with tax or registration today?</h2>
          <p>Talk to our team for practical guidance tailored to your case.</p>
          <div className="home-actions">
            <a href="https://wa.me/923000000000" target="_blank" rel="noreferrer" className="btn-primary">
              Start on WhatsApp
            </a>
            <Link to="/contact" className="home-secondary-btn">
              Contact us
            </Link>
          </div>
        </GlassCard>
      </Section>
    </>
  )
}

export default Home
