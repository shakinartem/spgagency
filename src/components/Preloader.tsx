import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 950);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[140] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
        >
          <div className="text-center">
            <motion.div
              className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-ember to-transparent"
              animate={{ opacity: [0.35, 1, 0.35], scaleX: [0.72, 1, 0.72] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            >
            </motion.div>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-sand/70">SPG Agency</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
