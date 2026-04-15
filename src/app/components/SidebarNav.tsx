import { Link, useLocation } from 'react-router';
import { Flame, Search, Heart, User, MapPin } from 'lucide-react';

export function SidebarNav() {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Flame, label: 'Discover' },
    { path: '/search', icon: Search, label: 'Search' },
    { path: '/saved', icon: Heart, label: 'Saved' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-56 min-h-screen bg-hype-bg-primary border-r border-hype-bg-secondary fixed top-0 left-0 bottom-0 z-50">
      {/* Logo */}
      <div className="px-6 py-8 border-b border-hype-bg-secondary">
        <div className="text-xs text-hype-text-secondary tracking-widest font-medium mb-1 uppercase">
          Hype.Wav
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-hype-cyan" />
          <span className="text-lg font-bold text-hype-text-primary">Seattle</span>
        </div>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-3 py-6 space-y-1">
        {navItems.map(({ path, icon: Icon, label }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors group ${
                isActive
                  ? 'bg-hype-violet/15 text-hype-violet'
                  : 'text-hype-text-secondary hover:bg-hype-bg-secondary hover:text-hype-text-primary'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium text-sm">{label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-hype-violet" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-6 border-t border-hype-bg-secondary">
        <p className="text-xs text-hype-text-secondary">© 2026 Hype.Wav</p>
      </div>
    </aside>
  );
}
