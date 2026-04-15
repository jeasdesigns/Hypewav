import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Show } from '../data/mockData';

const STORAGE_KEY = 'hype-saved-shows';

interface SavedCtx {
  savedShows: Show[];
  isSaved: (id: string) => boolean;
  toggleSaved: (show: Show) => void;
}

const SavedContext = createContext<SavedCtx>({
  savedShows: [],
  isSaved: () => false,
  toggleSaved: () => {},
});

export function useSaved(): SavedCtx {
  return useContext(SavedContext);
}

function loadFromStorage(): Show[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Show[]) : [];
  } catch {
    return [];
  }
}

function saveToStorage(shows: Show[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(shows));
  } catch {
    // localStorage unavailable — fail silently
  }
}

export function SavedProvider({ children }: { children: ReactNode }) {
  const [savedShows, setSavedShows] = useState<Show[]>(loadFromStorage);

  useEffect(() => {
    saveToStorage(savedShows);
  }, [savedShows]);

  function isSaved(id: string): boolean {
    return savedShows.some(s => s.id === id);
  }

  function toggleSaved(show: Show): void {
    setSavedShows(prev =>
      prev.some(s => s.id === show.id)
        ? prev.filter(s => s.id !== show.id)
        : [...prev, show]
    );
  }

  return (
    <SavedContext.Provider value={{ savedShows, isSaved, toggleSaved }}>
      {children}
    </SavedContext.Provider>
  );
}
