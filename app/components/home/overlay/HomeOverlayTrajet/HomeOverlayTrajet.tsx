import Trajet from "~/components/profil/component/trajet/Trajet";
import FSOverlay from "~/layouts/FSOverlay/FSOverlay";

interface HomeOverlayTrajetProps {
  onCloseCalendar: () => void;
}
const HomeOverlayTrajet = ({onCloseCalendar }: HomeOverlayTrajetProps) => {
  return (
    <FSOverlay onClose={onCloseCalendar} children={<Trajet />} />
  );
};

export default HomeOverlayTrajet;
