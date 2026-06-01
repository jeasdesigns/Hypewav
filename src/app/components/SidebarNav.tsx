import { Link, useLocation } from 'react-router';
import { MapPin, Heart, User } from 'lucide-react';

export function SidebarNav() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Discover' },
  ];

  return (
    <header className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-hype-bg-primary/95 backdrop-blur-xl border-b border-hype-bg-secondary">
      {/* Row 1: Logo + Nav + Utility icons */}
      <div className="flex items-center h-14 px-8 gap-8">
        <Link to="/" className="flex-shrink-0">
          <span className="text-xl font-bold text-hype-text-primary tracking-tight">
            Hype<span className="text-hype-violet">.</span>Wav
          </span>
        </Link>

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

        <div className="ml-auto flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <MapPin className="w-4 h-4 text-hype-cyan" />
            <span className="text-sm text-hype-text-primary font-medium">Seattle, WA</span>
          </div>
          <Link
            to="/saved"
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-hype-bg-secondary transition-colors"
            aria-label="Saved shows"
          >
            <Heart className={`w-5 h-5 ${location.pathname === '/saved' ? 'text-hype-violet' : 'text-hype-text-secondary'}`} />
          </Link>
          <Link
            to="/profile"
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-hype-bg-secondary transition-colors"
            aria-label="Profile"
          >
            <User className={`w-5 h-5 ${location.pathname === '/profile' ? 'text-hype-violet' : 'text-hype-text-secondary'}`} />
          </Link>
        </div>
      </div>

    </header>
  );
}
