import FSOverlayNoContainer from "~/layouts/FSOverlayNoContainer/FSOverlayNoContainer";
import CtaRightArrow from "~/src/assets/icon/cta/CtaRightArrow";
import Container from "~/components/main/container/Container";
import TrajetChoiceStep from "./TrajetChoiceStep/TrajetChoiceStep";
import { useState } from "react";
import { motion } from "framer-motion";

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
  const trajetSteps = [
    { label: "Domicile", time: "08:00", distance: "0m" },
    { label: "Station Métro", time: "08:15", distance: "1.2km" },
    { label: "Travail", time: "09:00", distance: "5km" },
  ];
  const [isDetailToggled, setIsDetailToggled] = useState(false);
  const handleToggleClick = () => {
    setIsDetailToggled(!isDetailToggled);
  };

  if (!trajet) return null;

  return (
    <FSOverlayNoContainer onClose={() => onClose(null)}>
      <div className="bg-[var(--maincolor-original)] absolute top-0 bottom-0 right-0 left-0 -z-10 opacity-20"></div>
      <div className="trajet__choice-detail-main" onClick={handleToggleClick}>
        <div className="trajet__choice-detail-main-cta">
          <motion.div
            initial={{ rotate: 0, scale: 1 }}
            animate={{
              rotate: isDetailToggled ? 180 : 0,
              scale: isDetailToggled ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <CtaRightArrow />
          </motion.div>

          <div
            className="trajet__choice-detail-add"
            onClick={(e) => {
              e.stopPropagation();
              onClose(trajet);
            }}
          >
            <p>Ajouter+</p>
          </div>
        </div>
        <Container>
          <div className="trajet__choice-detail-main-content">
            <div className="trajet__choice-detail-main-desc">
              <div className="trajet__choice-detail-main-desc-basic">
                <h3>{trajet.name}</h3>
                <p>{trajet.entreprise}</p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isDetailToggled ? 1 : 0,
                height: isDetailToggled ? "auto" : 0,
              }}
              transition={{
                duration: 0.5,
                
              }}
            >
              <div className="trajet__choice-detail-main-itineraire">
                <h3>Itinéraire du trajet</h3>
                <div className="trajet__choice-detail-itineraire-frame">
                  <div className="timeline">
                    {trajetSteps.map((step, index) => (
                      <TrajetChoiceStep key={index} step={step} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </FSOverlayNoContainer>
  );
};

export default TrajetChoiceDetail;
