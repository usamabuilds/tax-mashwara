import { ReactNode } from 'react';

type GlassCardProps = {
  title?: string;
  children: ReactNode;
};

export const GlassCard = ({ title, children }: GlassCardProps) => {
  return (
    <section className="glass-card p-6 sm:p-8">
      {title ? <h2 className="mb-3 text-xl font-semibold tracking-tight">{title}</h2> : null}
      {children}
    </section>
  );
};
