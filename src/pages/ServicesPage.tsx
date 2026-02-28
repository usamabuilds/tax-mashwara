import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { GlassCard } from '../components/shared/GlassCard';

export const ServicesPage = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight">Our Services</h1>
      <p className="max-w-2xl text-mutedext">Choose a service to view details and get started.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <GlassCard key={service.slug} title={service.title}>
            <p className="mb-4 text-sm text-mutedext">{service.shortDescription}</p>
            <Link to={`/services/${service.slug}`} className="btn-secondary inline-flex">
              View Details
            </Link>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};
