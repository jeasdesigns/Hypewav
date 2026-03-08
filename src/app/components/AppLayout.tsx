import { ReactNode } from 'react';
import { BottomNav } from './BottomNav';

interface AppLayoutProps {
  children: ReactNode;
  showBottomNav?: boolean;
  floatingAction?: ReactNode;
}

export function AppLayout({ children, showBottomNav = true, floatingAction }: AppLayoutProps) {
  return (
    <div className="relative flex flex-col h-full bg-[#09090F] text-[#F1F0FB]">
      {/* Content Area - No scroll here, parent MobileFrame handles it */}
      <div className="flex-1 pb-20">
        {children}
      </div>
      
      {/* Floating Action Button - Positioned above Bottom Nav */}
      {floatingAction && (
        <div className="absolute bottom-[200px] left-0 right-0 px-4 z-[60] pointer-events-none">
          <div className="pointer-events-auto">
            {floatingAction}
          </div>
        </div>
      )}
      
      {/* Fixed Bottom Navigation */}
      {showBottomNav && <BottomNav />}
    </div>
  );
}