import { Link, useLocation } from 'react-router';
import { MapPin } from 'lucide-react';

export function SidebarNav() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Discover' },
    { path: '/search', label: 'Search' },
    { path: '/saved', label: 'Saved' },
    { path: '/profile', label: 'Profile' },
  ];

  return (
    <header className="hidden lg:flex fixed top-0 left-0 right-0 z-50 h-16 bg-hype-bg-primary/95 backdrop-blur-xl border-b border-hype-bg-secondary items-center px-8 gap-10">
      {/* Logo */}
      <Link to="/" className="flex flex-col leading-tight flex-shrink-0 mr-4">
        <span className="text-[10px] text-hype-text-secondary tracking-widest font-medium uppercase">Hype.Wav</span>
        <span className="text-lg font-bold text-hype-text-primary leading-none">Seattle</span>
      </Link>

      {/* Nav links */}
      <nav className="flex items-center gap-1">
        {navItems.map(({ path, label }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`relative px-4 py-1.5 text-sm font-medium transition-colors rounded-md ${
                isActive
                  ? 'text-hype-text-primary'
                  : 'text-hype-text-secondary hover:text-hype-text-primary'
              }`}
            >
              {label}
              {isActive && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-hype-violet rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Location indicator */}
      <div className="ml-auto flex items-center gap-1.5 text-hype-text-secondary">
        <MapPin className="w-4 h-4 text-hype-cyan" />
        <span className="text-sm font-medium text-hype-text-primary">Seattle, WA</span>
      </div>
    </header>
  );
}
