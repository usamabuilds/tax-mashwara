import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { track } from '../lib/analytics'
import GlassCard from './GlassCard'
import Section from './Section'

type ServiceDetailTemplateProps = {
  slug: string
  title: string
  summary: string
  whoItsFor: string[]
  deliverables: string[]
  processSteps: string[]
  requiredDocumentsPlaceholder?: boolean
  relatedSlugs: string[]
}

function ServiceDetailTemplate({
  slug,
  title,
  summary,
  whoItsFor,
  deliverables,
  processSteps,
  requiredDocumentsPlaceholder = true,
  relatedSlugs,
}: ServiceDetailTemplateProps) {
  const relatedServices = services.filter((service) => relatedSlugs.includes(service.slug))

  return (
    <>
      <Section>
        <GlassCard className="service-detail-hero">
          <h1>{title}</h1>
          <p>{summary}</p>
          <a
            href="https://wa.me/923000000000"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            onClick={() => track('service_detail_whatsapp_click', { slug, placement: 'hero' })}
          >
            Chat on WhatsApp
          </a>
        </GlassCard>
      </Section>

      <Section>
        <GlassCard className="service-detail-block">
          <h2>Who it&apos;s for</h2>
          <ul>
            {whoItsFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </GlassCard>
      </Section>

      <Section>
        <GlassCard className="service-detail-block">
          <h2>What you get</h2>
          <ul>
            {deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </GlassCard>
      </Section>

      <Section>
        <GlassCard className="service-detail-block">
          <h2>Process</h2>
          <ol>
            {processSteps.slice(0, 3).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </GlassCard>
      </Section>

      {requiredDocumentsPlaceholder && (
        <Section>
          <GlassCard className="service-detail-block">
            <h2>Required documents</h2>
            {/* TODO: Add exact document checklist for this service after compliance review. */}
            {/* TODO: Add optional vs mandatory document split for client convenience. */}
            <p>TODO: Document checklist will be added soon.</p>
          </GlassCard>
        </Section>
      )}

      <Section>
        <GlassCard className="service-detail-cta">
          <h2>Need help getting started?</h2>
          <p>Get practical, Pakistan-focused support from our team in a quick WhatsApp chat.</p>
          <a
            href="https://wa.me/923000000000"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            onClick={() => track('service_detail_whatsapp_click', { slug, placement: 'bottom_cta' })}
          >
            Start on WhatsApp
          </a>
        </GlassCard>
      </Section>

      <Section>
        <div className="service-detail-related">
          <h2>Related services</h2>
          <div className="service-detail-related-grid">
            {relatedServices.map((service) => (
              <GlassCard key={service.slug} className="service-detail-related-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link
                  to={`/services/${service.slug}`}
                  onClick={() => track('service_card_click', { slug: service.slug, source: slug })}
                >
                  View service
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}

export default ServiceDetailTemplate
