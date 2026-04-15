import { ReactNode } from 'react';
import { BottomNav } from './BottomNav';

interface AppLayoutProps {
  children: ReactNode;
  showBottomNav?: boolean;
  floatingAction?: ReactNode;
}

export function AppLayout({ children, showBottomNav = true, floatingAction }: AppLayoutProps) {
  return (
    <div className="relative flex flex-col min-h-screen bg-hype-bg-primary text-hype-text-primary">
      <div className="flex-1 pb-20 lg:pb-0">
        {children}
      </div>

      {floatingAction && (
        <div className="absolute bottom-[200px] left-0 right-0 px-4 z-[60] pointer-events-none lg:hidden">
          <div className="pointer-events-auto">{floatingAction}</div>
        </div>
      )}

      {/* Bottom nav — mobile only */}
      {showBottomNav && <BottomNav />}
    </div>
  );
}
