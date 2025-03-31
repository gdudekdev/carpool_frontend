import TrajetChoice from "~/components/profil/component/trajet/TrajetChoice/TrajetChoice";
import FSOverlay from "~/layouts/FSOverlay/FSOverlay";
interface HomeOverlayTrajetProps {
  onCloseChoice: () => void;
}

const HomeOverlayChoice = ({ onCloseChoice }: HomeOverlayTrajetProps) => {

  return (
    <FSOverlay onClose={onCloseChoice} children={<TrajetChoice />} />
  );
};

export default HomeOverlayChoice;
