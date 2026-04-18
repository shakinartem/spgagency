import { Crosshair, FileStack, FolderClosed } from "lucide-react";
import { motion } from "framer-motion";

export function SideOrnaments() {
  return (
    <>
      <div className="pointer-events-none fixed inset-y-0 left-0 z-10 hidden w-20 xl:block">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="side-ornament left-6 top-32"
        >
          <div className="side-chip">
            <FolderClosed size={16} />
            dossier
          </div>
        </motion.div>
        <motion.div
          animate={{ rotate: [0, 6, 0], y: [0, 8, 0] }}
          transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="side-ornament left-5 top-[42vh]"
        >
          <div className="target-frame">
            <Crosshair size={18} />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="side-ornament left-6 bottom-24"
        >
          <div className="side-chip">
            <FileStack size={16} />
            archive
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none fixed inset-y-0 right-0 z-10 hidden w-20 xl:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 8.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="side-ornament right-6 top-36"
        >
          <div className="target-frame target-frame-lg">
            <Crosshair size={18} />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, -4, 0] }}
          transition={{ duration: 9.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="side-ornament right-5 top-[54vh]"
        >
          <div className="side-chip">
            <FolderClosed size={16} />
            mission file
          </div>
        </motion.div>
      </div>
    </>
  );
}
