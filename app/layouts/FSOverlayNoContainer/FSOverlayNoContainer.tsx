import { useEffect } from "react";
import { motion } from "framer-motion";
import Nav from "../../components/main/nav/Nav";

interface FSOverlayProps {
  children: React.ReactNode;
  onClose: () => void;
}

const FSOverlay = ({ children, onClose }: FSOverlayProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="layout__fullscreen-overlay">
      <Nav onClose={onClose} />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
          <div>{children}</div>
      </motion.div>
    </div>
  );
};

export default FSOverlay;