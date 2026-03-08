import { Link, useLocation } from "react-router";
import { Flame, Search, Heart, User } from "lucide-react";

export function BottomNav() {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Flame, label: 'Discover' },
    { path: '/search', icon: Search, label: 'Search' },
    { path: '/saved', icon: Heart, label: 'Saved' },
    { path: '/profile', icon: User, label: 'Me' },
  ];

  return (
    <nav className="sticky bottom-0 left-0 right-0 bg-[#09090F]/95 backdrop-blur-xl border-t border-[#13121E] z-50 mt-auto">
      <div className="max-w-md mx-auto px-4">
        <div className="flex justify-around items-center h-20 pb-6">
          {navItems.map(({ path, icon: Icon, label }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className="flex flex-col items-center gap-1 min-w-[44px] min-h-[44px] justify-center group"
              >
                <Icon 
                  className={`w-6 h-6 transition-colors ${
                    isActive 
                      ? 'text-[#A78BFA]' 
                      : 'text-[#9CA3AF] group-hover:text-[#F1F0FB]'
                  }`}
                />
                <span 
                  className={`text-xs transition-colors ${
                    isActive 
                      ? 'text-[#A78BFA]' 
                      : 'text-[#9CA3AF] group-hover:text-[#F1F0FB]'
                  }`}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}