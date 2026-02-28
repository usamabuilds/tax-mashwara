import { Link } from 'react-router-dom';
import { TrustBadge } from '../components/shared/TrustBadge';
import { GlassCard } from '../components/shared/GlassCard';

export const HomePage = () => {
  return (
    <div className="space-y-8">
      <section className="space-y-4 text-center">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <TrustBadge label="FBR-Aligned Guidance" />
          <TrustBadge label="Confidential Advisory" />
          <TrustBadge label="Fast Turnaround" />
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Tax clarity for individuals and businesses in Pakistan.
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-mutedext">
          Tax Mashwara helps you stay compliant and confident with practical, transparent, and human-first
          tax support.
        </p>
        <Link to="/services" className="btn-primary inline-flex">
          Explore Services
        </Link>
      </section>

      <GlassCard title="What we do">
        <p className="text-mutedext">
          We combine tax expertise with a modern client experience. From registration to annual filing, every
          service is built for clarity and trust.
        </p>
      </GlassCard>
    </div>
  );
};
