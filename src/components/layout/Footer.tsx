export const Footer = () => {
  return (
    <footer className="border-t border-white/20 bg-white/5">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-mutedext sm:px-6 lg:px-8 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Tax Mashwara. All rights reserved.</p>
        <p>Designed for trust, clarity, and compliant growth.</p>
      </div>
    </footer>
  );
};
