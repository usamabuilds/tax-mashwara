import { NavLink } from 'react-router-dom'
import Section from './Section'
import TrustBadge from './TrustBadge'
import WhatsAppButton from './WhatsAppButton'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Calculator', to: '/calculator' },
  { label: 'About', to: '/about' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
]

function Header() {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 40, paddingTop: '0.75rem' }}>
      <Section innerClassName="glass-nav">
        <div
          style={{
            padding: '0.8rem 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <nav style={{ display: 'flex', gap: '0.3rem', alignItems: 'center', flexWrap: 'wrap' }} aria-label="Main">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `site-link${isActive ? ' site-link--active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <TrustBadge />
            <WhatsAppButton />
          </div>
        </div>
      </Section>
    </header>
  )
}

export default Header
