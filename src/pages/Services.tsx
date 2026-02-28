import { Link } from 'react-router-dom'
import GlassCard from '../components/GlassCard'
import Section from '../components/Section'
import { services } from '../data/services'
import { track } from '../lib/analytics'

type ServiceCategory = {
  title: string
  slugs: string[]
}

const categories: ServiceCategory[] = [
  {
    title: 'Personal Tax',
    slugs: ['ntn', 'income-tax'],
  },
  {
    title: 'Business Tax',
    slugs: ['sales-tax', 'withholding-tax'],
  },
  {
    title: 'Legal & Registration',
    slugs: ['business-registration', 'company-registration', 'trademark'],
  },
  {
    title: 'Compliance',
    slugs: ['tax-notices', 'secp'],
  },
  {
    title: 'Other Services',
    slugs: ['website-design'],
  },
]

function Services() {
  return (
    <>
      <Section>
        <GlassCard className="services-intro-card">
          <h1>Tax and compliance services for Pakistan</h1>
          <p>
            Choose from personal filing, business tax, registration, and compliance support designed for fast,
            professional execution.
          </p>
        </GlassCard>
      </Section>

      <Section>
        <div className="services-categories-wrap">
          {categories.map((category) => {
            const categoryServices = services.filter((service) => category.slugs.includes(service.slug))

            return (
              <GlassCard key={category.title} className="services-category-card">
                <h2>{category.title}</h2>
                <div className="services-grid">
                  {categoryServices.map((service) => (
                    <GlassCard key={service.slug} className="services-service-card">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <div className="services-actions-row">
                        <Link to={`/services/${service.slug}`} className="services-detail-link"
                          onClick={() => track('service_card_click', { slug: service.slug, source: 'services' })}
                        >
                          View service
                        </Link>
                        <a
                          href="https://wa.me/923000000000"
                          target="_blank"
                          rel="noreferrer"
                          className="services-whatsapp-inline"
                        >
                          WhatsApp
                        </a>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </GlassCard>
            )
          })}
        </div>
      </Section>
    </>
  )
}

export default Services
