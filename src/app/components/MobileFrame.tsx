import { ReactNode } from 'react';
import { SidebarNav } from './SidebarNav';

interface MobileFrameProps {
  children: ReactNode;
}

export function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="min-h-screen bg-hype-bg-primary">
      {/* Top nav — desktop only */}
      <SidebarNav />

      {/* Main content area — offset by top nav height on desktop */}
      <div className="lg:pt-28 min-h-screen">
        {children}
      </div>
    </div>
  );
}
