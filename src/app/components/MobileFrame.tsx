import { ReactNode } from 'react';

interface MobileFrameProps {
  children: ReactNode;
}

/**
 * MobileFrame - Constrains content to mobile device dimensions (390x844 - iPhone 14 Pro size)
 * Use this wrapper to ensure designs copy/paste into Figma at correct mobile resolution
 */
export function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="min-h-screen bg-[#1A1927] flex items-start justify-center p-4">
      {/* Mobile Container - iPhone 14 Pro dimensions */}
      <div 
        className="w-[390px] h-[844px] bg-[#09090F] relative shadow-2xl rounded-[3rem]"
        style={{
          maxWidth: '390px',
          maxHeight: '844px',
          overflow: 'hidden',
        }}
      >
        {/* Scrollable Content Area */}
        <div 
          className="absolute inset-0 overflow-y-auto overflow-x-hidden"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {children}
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style>{`
        .absolute.inset-0::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}