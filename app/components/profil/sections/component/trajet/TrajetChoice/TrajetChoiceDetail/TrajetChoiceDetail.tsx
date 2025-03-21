import { useState } from "react";
import { motion } from "framer-motion";
import FSOverlayNoContainer from "~/layouts/FSOverlayNoContainer/FSOverlayNoContainer";
import CtaRightArrow from "~/src/assets/icon/cta/CtaRightArrow";

interface TrajetChoiceDetailProps {
  trajet: {
    id: number;
    name: string;
    entreprise: string;
    rdv: string;
    distance: string;
  } | null;
  onClose: (
    trajet: {
      id: number;
      name: string;
      entreprise: string;
      rdv: string;
      distance: string;
    } | null
  ) => void;
}

const TrajetChoiceDetail = ({ trajet, onClose }: TrajetChoiceDetailProps) => {
  if (!trajet) return null;

  const minHeight = 200;
  const maxHeight = 500;
  const [height, setHeight] = useState(minHeight);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleHeight = () => {
    setHeight((prevHeight) =>
      prevHeight === minHeight ? maxHeight : minHeight
    );
    setIsExpanded((prev) => !prev);
  };

  const handleAjouterClick = () => {
    onClose(trajet);
  };

  return (
    <FSOverlayNoContainer onClose={() => onClose(null)}>
      <div className="bg-[var(--maincolor-original)] absolute top-0 bottom-0 right-0 left-0 -z-10 opacity-20"></div>

      <motion.div
        className="flex flex-col bg-white p-6 rounded-tl-lg rounded-tr-lg shadow-lg w-full absolute bottom-[var(--navbar-height)] pt-2"
        style={{ height }}
        initial={{ height }}
        animate={{ height }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 1,
        }}
        onClick={toggleHeight}
      >
        <div className="flex justify-center items-center w-full py-1 rounded-lgcursor-pointer relative">
          <motion.div
            className="trajet__choice-detail-cta-container"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <CtaRightArrow />
          </motion.div>
          <div
            className="cursor-pointer text-white text-xs absolute right-5 py-1 px-2 flex items-center justify-center rounded bg-[var(--maincolor-original)]"
            onClick={handleAjouterClick}
          >
            <p>Ajouter +</p>
          </div>
        </div>

        <div
          className={`${
            isExpanded ? "overflow-y-auto max-h-[calc(100vh-100px)]" : ""
          }`}
        >
          <div className="trajet__choice-detail-desc">
            <h2 className="text-xl font-bold mb-2">{trajet.name}</h2>
            <p>
              <strong>Entreprise:</strong> {trajet.entreprise}
            </p>
            <p>
              <strong>RDV:</strong> {trajet.rdv}
            </p>
            <p>
              <strong>Distance:</strong> {trajet.distance}
            </p>
          </div>
          {isExpanded && (
            <div className="trajet__choice-detail-main mt-6">
              <h3 className="text-lg font-semibold mb-4">Détails du trajet</h3>
              <div className="trajet__details-item mb-4">
                <h4 className="text-md font-bold">Départ</h4>
                <p>
                  <strong>Ville de départ:</strong> Paris
                </p>
                <p>
                  <strong>Heure de départ:</strong> 08:00
                </p>
                <p>
                  <strong>Adresse:</strong> 123 Rue de Paris, 75001
                </p>
                <p>
                  <strong>Distance:</strong> 50 km
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </FSOverlayNoContainer>
  );
};

export default TrajetChoiceDetail;
