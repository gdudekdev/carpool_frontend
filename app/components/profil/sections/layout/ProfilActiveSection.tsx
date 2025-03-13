import CtaRightArrow from "~/src/assets/icon/cta/CtaRightArrow";
import { motion } from "framer-motion";
import Container from "~/components/container/Container";
import profilSections from "./profilSections";

const ProfilActiveSection: React.FC<{
  activeComponent: string | null;
  onClose: () => void;
}> = ({ activeComponent, onClose }) => {
  if (!activeComponent) return null;

  const Component = profilSections[activeComponent];

  return (
    <div className="profil__fullscreen-overlay">
      <div className="profil__close-button" onClick={onClose}>
        <CtaRightArrow />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="profil__fullscreen-content">
          <Container>
            <Component />
          </Container>
        </div>
      </motion.div>
    </div>
  );
};
export default ProfilActiveSection;
