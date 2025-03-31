import Attestation from "../../component/attestation/Attestation";
import Block from "../../component/block/Block";
import Cgu from "../../component/cgu/Cgu";
import Cookies from "../../component/cookies/Cookies";
import Faq from "../../component/faq/Faq";
import Historique from "../../component/historique/Historique";
import Info from "../../component/info/Info";
import Privacy from "../../component/privacy/Privacy";
import Stats from "../../component/stats/Stats";
import Trajet from "../../component/trajet/Trajet";
import Vehicule from "../../component/vehicule/Vehicule";

const profilSections: Record<string, React.FC> = {
  historique: Historique,
  attestation: Attestation,
  vehicule: Vehicule,
  info: Info,
  stats: Stats,
  block: Block,
  faq: Faq,
  cgu: Cgu,
  privacy: Privacy,
  cookies: Cookies,
  trajet: Trajet,
};

export default profilSections;
