import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type CursorState = {
  x: number;
  y: number;
  active: boolean;
  visible: boolean;
};

export function CustomCursor() {
  const [cursor, setCursor] = useState<CursorState>({ x: 0, y: 0, active: false, visible: false });

  useEffect(() => {
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop) return;

    const handleMove = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = Boolean(target?.closest("a, button, input, textarea, label, [role='button']"));

      setCursor({
        x: event.clientX,
        y: event.clientY,
        active: interactive,
        visible: true,
      });
    };

    const handleLeave = () => {
      setCursor((current) => ({ ...current, visible: false }));
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseout", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
    };
  }, []);

  if (!cursor.visible) return null;

  return (
    <>
      <motion.div
        className="custom-cursor-ring"
        animate={{
          x: cursor.x - 18,
          y: cursor.y - 18,
          scale: cursor.active ? 1.3 : 1,
          opacity: cursor.visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 340, damping: 28, mass: 0.4 }}
      />
      <motion.div
        className="custom-cursor-dot"
        animate={{
          x: cursor.x - 3,
          y: cursor.y - 3,
          scale: cursor.active ? 0.9 : 1,
          opacity: cursor.visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.2 }}
      />
    </>
  );
}
