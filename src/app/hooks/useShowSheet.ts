import { useState, useRef } from 'react';

// Decouples "sheet open" state from "displayed show" state so the content
// remains visible during the 300ms slide-out animation before unmounting.
export function useShowSheet() {
  const [selectedShowId, setSelectedShowId] = useState<string | null>(null);
  const [displayedShowId, setDisplayedShowId] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openShow = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDisplayedShowId(id);
    setSelectedShowId(id);
  };

  const closeShow = () => {
    setSelectedShowId(null);
    // Keep displayedShowId alive through the 300ms close animation
    closeTimer.current = setTimeout(() => setDisplayedShowId(null), 350);
  };

  return { selectedShowId, displayedShowId, openShow, closeShow };
}
