import { ReactNode } from 'react';
import { SidebarNav } from './SidebarNav';

interface MobileFrameProps {
  children: ReactNode;
}

export function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="min-h-screen bg-hype-bg-primary">
      <SidebarNav />
      <div className="lg:pt-14 min-h-screen">
        {children}
      </div>
    </div>
  );
}
