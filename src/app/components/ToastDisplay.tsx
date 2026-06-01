import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from '../utils/toast';

export function ToastDisplay() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    toast._register(msg => {
      setMessage(msg);
      clearTimeout(timer);
      timer = setTimeout(() => setMessage(null), 2200);
    });
    return () => {
      clearTimeout(timer);
      toast._unregister();
    };
  }, []);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          key={message}
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ type: 'spring', damping: 24, stiffness: 400 }}
          className="fixed bottom-28 lg:bottom-8 left-1/2 -translate-x-1/2 z-[300] bg-hype-bg-secondary text-hype-text-primary px-5 py-2.5 rounded-full text-sm font-medium shadow-xl ring-1 ring-white/10 whitespace-nowrap pointer-events-none"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
