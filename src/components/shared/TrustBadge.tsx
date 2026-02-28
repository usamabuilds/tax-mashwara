type TrustBadgeProps = {
  label: string;
};

export const TrustBadge = ({ label }: TrustBadgeProps) => {
  return (
    <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-text shadow-glass">
      {label}
    </span>
  );
};
