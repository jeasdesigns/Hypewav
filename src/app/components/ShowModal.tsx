import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { ShowDetailContent } from './ShowDetailContent';

interface ShowModalProps {
  showId: string | null;
  onClose: () => void;
  onSelect: (id: string) => void;
}

export function ShowModal({ showId, onClose, onSelect }: ShowModalProps) {
  // Lock body scroll while open
  useEffect(() => {
    if (!showId) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [showId]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {showId && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: 'spring', damping: 26, stiffness: 380 }}
            className="fixed inset-x-4 top-[4vh] bottom-[4vh] z-50 max-w-2xl mx-auto bg-hype-bg-primary rounded-2xl overflow-y-auto shadow-2xl ring-1 ring-white/5"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-hype-bg-secondary hover:bg-hype-bg-hover transition-colors text-hype-text-secondary hover:text-hype-text-primary"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <ShowDetailContent showId={showId} onClose={onClose} onSelect={onSelect} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
