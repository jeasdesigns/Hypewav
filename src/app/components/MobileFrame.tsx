import { ReactNode } from 'react';

interface MobileFrameProps {
  children: ReactNode;
}

/**
 * MobileFrame - Full-screen on mobile, centered max-width container on desktop
 */
export function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="min-h-screen bg-[#09090F]">
      <div className="mx-auto w-full max-w-2xl min-h-screen bg-[#09090F] relative">
        {children}
      </div>
    </div>
  );
}