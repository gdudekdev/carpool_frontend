import { useEffect } from "react";
import { motion } from "framer-motion";
import Container from "~/components/main/container/Container";
import TrajetChoice from "~/components/profil/sections/component/trajet/TrajetChoice/TrajetChoice";

interface HomeOverlayTrajetProps {
  isVisibleChoice: boolean;
  onCloseChoice: () => void;
}

const HomeOverlayChoice = ({ isVisibleChoice, onCloseChoice }: HomeOverlayTrajetProps) => {
  // Ajoute un écouteur d'événements pour fermer l'overlay avec "Échap"
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCloseChoice();
      }
    };

    if (isVisibleChoice) {
      // Désactive le scroll du body lorsque l'overlay est visible
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      // Réactive le scroll du body lorsque l'overlay est caché
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      // Nettoyage des effets pour éviter les fuites de mémoire
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisibleChoice, onCloseChoice]);

  return (
    <Container>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isVisibleChoice ? "0%" : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="home__overlay-fullpage"
      >
        <button className="home__overlay-close-btn" onClick={onCloseChoice}>
          X
        </button>
        <TrajetChoice />
      </motion.div>
    </Container>
  );
};

export default HomeOverlayChoice;
