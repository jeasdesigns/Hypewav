import { ReactNode } from 'react';
import { useLocation } from 'react-router';
import { SidebarNav } from './SidebarNav';

interface MobileFrameProps {
  children: ReactNode;
}

export function MobileFrame({ children }: MobileFrameProps) {
  const { pathname } = useLocation();
  // /search hides nav Row 2, so only one row tall (pt-14); all other pages show both rows (pt-28)
  const desktopOffset = pathname === '/search' ? 'lg:pt-14' : 'lg:pt-28';

  return (
    <div className="min-h-screen bg-hype-bg-primary">
      <SidebarNav />
      <div className={`${desktopOffset} min-h-screen`}>
        {children}
      </div>
    </div>
  );
}
