import { ReactNode } from 'react';
import { SidebarNav } from './SidebarNav';

interface MobileFrameProps {
  children: ReactNode;
}

export function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="min-h-screen bg-hype-bg-primary flex">
      {/* Sidebar — desktop only */}
      <SidebarNav />

      {/* Main content area — offset by sidebar width on desktop */}
      <div className="flex-1 lg:ml-56 min-h-screen">
        {children}
      </div>
    </div>
  );
}
