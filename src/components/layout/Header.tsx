import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/calculator', label: 'Calculator' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-white/10 backdrop-blur-glass">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-lg font-semibold tracking-tight">
          Tax Mashwara
        </Link>
        <nav className="hidden gap-1 rounded-full border border-white/30 bg-white/10 p-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm transition ${
                  isActive ? 'bg-white/30 text-text' : 'text-mutedext hover:bg-white/20'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};
